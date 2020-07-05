'use strict';

module.exports.contactInfo = async (event, context, callback) => {
  console.log("Hello", event.body);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify('success')
  }
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
