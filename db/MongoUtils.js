const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbName = "yourNextEventDB";
const userCollection = "users";
const eventCollection = "events";

function MongoUtils() {
  const mu = {};
  var url = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : "mongodb://localhost/yourNextEventDB";
  mu.connect = () => {
    const client = new MongoClient(url, { useUnifiedTopology: true }); // { useUnifiedTopology: true } removes connection warnings;
    return client.connect();
  };

  mu.getUsers = (query) =>
    mu.connect().then((client) => {
      const clientCol = client.db(dbName).collection(userCollection);
      return clientCol
        .find(query)
        .limit(20)
        .sort({ timestamp: -1 })
        .toArray()
        .finally(() => client.close());
    });

  mu.createUser = (user) =>
    mu.connect().then((client) => {
      const clientCol = client.db(dbName).collection(userCollection);

      return clientCol.insertOne(user).finally(() => client.close());
    });

  mu.getUserById = (id) =>
    mu.connect().then((client) => {
      const userCol = client.db(dbName).collection(userCollection);

      return userCol
        .findOne({ _id: new ObjectID(id) })
        .finally(() => client.close());
    });

  mu.getUserByName = (username) =>
    mu.connect().then((client) => {
      const userCol = client.db(dbName).collection(userCollection);

      return userCol
        .findOne({ username: username })
        .finally(() => client.close());
    });

  mu.deleteUser = (id) =>
    mu.connect().then((client) => {
      const userCol = client.db(dbName).collection(userCollection);

      return userCol
        .deleteOne({ _id: new ObjectID(id) })
        .finally(() => client.close());
    });

  mu.updateUser = (id, user) =>
    mu.connect().then((client) => {
      const noteCol = client.db(dbName).collection(userCollection);

      return noteCol
        .updateOne(
          { _id: new ObjectID(id) },
          {
            $set: {
              username: user.username,
            },
          },
          { upsert: false }
        )
        .finally(() => client.close());
    });

  mu.createEvent = (event) =>
    mu.connect().then((client) => {
      const clientCol = client.db(dbName).collection(eventCollection);

      return clientCol.insertOne(event).finally(() => client.close());
    });

  mu.getEvents = (query) =>
    mu.connect().then((client) => {
      const eventCol = client.db(dbName).collection(eventCollection);
      return eventCol
        .find(query)
        .limit(20)
        .sort({ timestamp: -1 })
        .toArray()
        .finally(() => client.close());
    });

  mu.getEventByID = (id) =>
    mu.connect().then((client) => {
      const evCol = client.db(dbName).collection(eventCollection);

      return evCol
        .findOne({ _id: new ObjectID(id) })
        .finally(() => client.close());
    });

  return mu;
}

module.exports = MongoUtils();
