const {
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
const { users, posts } = require('../data');

// gender enum type

const GenderEnumType = new GraphQLEnumType({
    name: 'gendertype',
    description: 'enum type for gender ',
    values: {
        male: {
            value: 'male'
        },
        female: {
            value: 'female'
        }
    }
});

// user type
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'user data ',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        gender: {
            type: GenderEnumType
        },
        phone: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        posts: {
            type: new GraphQLList(PostType),

            resolve: (user, args) => {
                return posts.filter((post) => user.posts.includes(post.id));
            }
        }
    })
});

// post types

const PostType = new GraphQLObjectType({
    name: 'post',
    description: 'posts',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        user: {
            type: UserType,
            resolve: (parent, args) => {
                return users.find((user) => user.id === parent.user);
            }
        }
    })
});

// root query type
const RootQueryType = new GraphQLObjectType({
    name: 'query',
    description: 'root query ',
    fields: () => ({
        users: {
            type: new GraphQLList(new GraphQLNonNull(UserType)),
            resolve: () => {
                return users;
            }
        },
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: (_, { id }) => {
                return users.find((user) => user.id === id); // mongoose to model to users // controller function
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve: () => {
                return posts;
            }
        },
        post: {
            type: PostType,
            args: {
                id: {
                    type: GraphQLID
                }
            },

            resolve: (_, { id }) => {
                return posts.find((post) => post.id === id);
            }
        }
    })
});

module.exports = {
    UserType,
    RootQueryType
};
