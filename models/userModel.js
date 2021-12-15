const User = require("../config/databaseConfig/user.schema.js");
const Event = require("../config/databaseConfig/event.schema.js");
const { hashPassword, signToken, decryptPassword } = require("../auth/index");
const uploadToS3 = require("../utils/uploadToS3");

exports.fetchUsers = async () => {
  try {
    const users = await User.find({});

    if (users.length > 0) {
      return users;
    }

    return Promise.reject({ statusCode: 404, message: "Users not found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.insertUser = async (body, files) => {
  try {
    const user = await User.findOne({ username: body.username });
    if (user)
      return Promise.reject({
        statusCode: 400,
        message: "User already exists",
      });

    // check if email is unique
    const email = await User.findOne({ email: body.email });
    if (email)
      return Promise.reject({
        statusCode: 400,
        message: "Email already exists",
      });

    // cheack if the user has send image
    const S3Res = files ? await uploadToS3(files) : null;

    // grab the image url from the S3 response
    const avatarUrl = S3Res ? S3Res.Location : null;
    // hash the password before saving using the hashPassword function
    const hashedPassword = await hashPassword(body.password);
    // create a new user
    const newUser = new User({
      ...body,
      password: hashedPassword,
      avatarUrl,
    });

    const savedUser = await newUser.save();

    // make a payload with the user's id and username
    const payload = {
      id: savedUser._id,
      username: savedUser.username,
    };

    // sign the user in and return the token
    const token = await signToken(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // return user without the password property and the token property as well
    return {
      User: {
        ...savedUser._doc,
        password: undefined,
      },
      token,
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.fetchUser = async (username) => {
  try {
    const user = await User.findOne({ username: username })
      .populate(
        "attendedEvents",
        "eventId title description eventImage eventStart eventEnd"
      )
      .populate(
        "hostedEvents",
        "eventId title description eventImage eventStart eventEnd"
      )
      .exec();

    if (!user) {
      return Promise.reject({ statusCode: 404, message: "User not found" });
    }
    // return user without the password property
    return {
      ...user._doc,
      password: undefined,
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.updateUser = async (user, body, files) => {
  try {
    // check if body is empty
    if (Object.keys(body).length === 0) {
      return Promise.reject({
        statusCode: 400,
        message: "No body was sent",
      });
    }
    const { email, displayName, pronouns } = body;
    // check if the user has send image
    const S3Res = files ? await uploadToS3(files) : null;
    // grab the image url from the S3 response
    const avatarUrl = S3Res ? S3Res.Location : null;
    // update the user
    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      {
        email,
        displayName,
        pronouns,
        avatarUrl,
      },
      { new: true }
    );
    // return the updated user without the password property
    return {
      ...updatedUser._doc,
      password: undefined,
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.removeUser = async (user) => {
  try {
    await User.findByIdAndDelete(user.id);
    return {
      message: "User deleted",
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchEventsByUsername = async (username) => {
  // find all events where creator is the same as the one passed in
  try {
    const events = await Event.find({ creator: username });
    if (events.length > 0) {
      return events;
    }
    return Promise.reject({
      statusCode: 404,
      message: "Events not found",
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.signInUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return Promise.reject({
        statusCode: 404,
        message: "User not found",
      });
    }
    // check if the password is correct by decrypting it
    const isPasswordValid = await decryptPassword(password, user.password);

    // if the password is not valid, reject the promise
    if (!isPasswordValid) {
      return Promise.reject({
        statusCode: 400,
        message: "Invalid password",
      });
    }
    // make a payload with the user's id and username
    const payload = {
      id: user._id,
      username: user.username,
    };
    // sign the user in and return the token
    const token = await signToken(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // return user without the password property
    return {
      user: {
        ...user._doc,
        password: undefined,
      },
      token,
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.getUserProfile = async (id) => {
  try {
    const user = await User.findById(id)
      .populate(
        "attendedEvents",
        "eventId title description eventImage eventStart eventEnd"
      )
      .populate(
        "hostedEvents",
        "eventId title description eventImage eventStart eventEnd"
      )
      .exec();

    if (!user) {
      return Promise.reject({
        statusCode: 404,
        message: "User not found",
      });
    }
    return {
      ...user._doc,
      password: undefined,
    };
  } catch (err) {
    return Promise.reject(err);
  }
};
