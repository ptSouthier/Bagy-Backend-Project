const { merge } = require('graphql-merge-resolvers');
const CustomerResolver = require('./CustomerResolver');
const ProductResolver = require('./ProductResolver');

module.exports = merge([
  CustomerResolver,
  ProductResolver
]);
