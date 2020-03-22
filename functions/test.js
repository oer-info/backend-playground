exports.handler = (event, context, callback) => {
  console.log("Hello from the console");
  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!"
  });
};
