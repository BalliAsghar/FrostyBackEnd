const S3 = require("aws-sdk/clients/s3");
module.exports = async function (file) {
  // s3 config
  const s3 = new S3({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: process.env.AWSRegion,
    apiVersion: process.env.APIVersion,
  });

  const params = {
    Bucket: process.env.AWSBucket,
    Key: `${Date.now()}-${file.name}`,
    Body: file.data,
  };

  return await s3.upload(params).promise();
};
