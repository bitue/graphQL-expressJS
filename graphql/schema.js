const {
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLFloat,
    GraphQLError,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');
const { RootQueryType } = require('./types');

const schema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = {
    schema
};
