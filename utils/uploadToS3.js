const S3 = require("aws-sdk/clients/s3");
module.exports = async function (files) {
  // s3 config
  const s3 = new S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: process.env.AWSRegion,
    apiVersion: process.env.APIVersion,
  });

  const { image } = files;

  const params = {
    Bucket: process.env.AWSBucket,
    Key: `${Date.now()}-${image.name}`,
    Body: image.data,
  };

  return await s3.upload(params).promise();
};
