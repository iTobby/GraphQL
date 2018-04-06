import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import post from "./queries/post";
import posts from "./queries/posts";
import author from "./queries/author";

import addPost from "./mutations/addPost"
import addComment from "./mutations/addComment"

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Rootquery',
        fields: () => ({
            ...post,
            ...posts,
            ...author
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'Rootmututation',
        fields: () => ({
            ...addPost,
            ...addComment
        })
    })
})

export default schema;