exports.handler = (event, context, callback) => {
  console.log("Hello from the console");
  const { identity, user } = context.clientContext;
  console.log("Check auth");
  console.log(identity, user);
  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!"
  });

  const algoliasearch = require("algoliasearch");

  const client = algoliasearch("8U7CL41ANW", process.env.ALGOLIA_ADMIN_KEY);
  const index = client.initIndex("offers");

  const objects = [
    {
      objectID: 1,
      title: "Added by netlify function"
    }
  ];

  index
    .saveObjects(objects)
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch(err => {
      console.log(err);
    });
};
