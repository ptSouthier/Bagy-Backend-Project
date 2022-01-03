const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const database = require('./database/config');

(async () => {
  try {
    await database.authenticate()
    await database.sync();
    console.log('Connection has been established successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, './schema', 'schema.graphql'),
  resolvers,
});

server.start(({ port }) => console.log(`Server is running on port ${port}!`));
