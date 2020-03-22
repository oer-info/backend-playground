exports.handler = (event, context, callback) => {
  console.log("Hello from the console");
  const { identity, user } = context.clientContext;
  console.log("Check auth");
  console.log(identity, user);

  const algoliasearch = require("algoliasearch");
  const querystring = require("querystring");

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);
  if (!params.title) {
    return { statusCode: 400, body: "The title must be set" };
  }

  const client = algoliasearch("8U7CL41ANW", process.env.ALGOLIA_ADMIN_KEY);
  const index = client.initIndex("offers");

  const objects = [
    {
      objectID: 1,
      title: params.title
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

  callback(null, {
    statusCode: 200,
    body: "No worries, all is working fine!"
  });
};
