exports.handler = (event, context, callback) => {
  console.log("Hello from the console");
  const { identity, user } = context.clientContext;
  console.log("Check auth");
  console.log(event, identity, user);
  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!"
  });
};
