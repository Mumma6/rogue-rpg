require('dotenv').config();
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import connectDB from './db'
import cors from 'cors'
import users from './routes/userRoutes'
import heroTemplates from './routes/heroTemplateRoutes'
import spells from './routes/spellRoutes'
import itemTypes from './routes/itemRoutes/itemTypeRoutes'
import enemies from './routes/enemiesRoutes'
import runs from './routes/runRoutes'
import itemPrefixs from './routes/itemRoutes/itemPrefixRoutes'
import itemSuffixs from './routes/itemRoutes/itemSuffixRoutes'
import itemRaritys from './routes/itemRoutes/itemRarityRoutes'

import mongoose from 'mongoose'
import PostModel, { IPost } from './models/postModel'

connectDB()

const app = express()

// Lägg i en egen fil
const typeDefs = gql`
  type Comment {
    author: String,
    content: String,
    id: String,
  },
  type Post {
    _id: String,
    title: String,
    content: String,
    author: String,
    comments: [Comment],
    created: String,
  },
  type Query {
    posts: [Post]
    hello: String
  },
  type Mutation {
    addPost(title: String!, content: String!, author: String!): Post,
    removePost(id: ID!): Post,
    addComment(id: ID!, author: String!, content: String!): Post,
    removeComment(postId: ID!, commentId: ID!): Post
  }
`

type Comment = {
  author: string,
  content: string,
  id: string,
}
const resolvers = {
  /**
   * A GraphQL Query for posts that uses a Post model to query MongoDB
   * and get all Post documents.
   */
  Query: {
    posts: () => PostModel.find({}),
    hello: () => 'Hello from graphql'
  },
  /**
   * A GraphQL Mutation that provides functionality for adding post to
   * the posts list and return post after successfully adding to list
   * also remove post.
   */
  Mutation: {
    addPost: (parent: any, data: IPost) => {
      const newPost = new PostModel({
        title: data.title,
        content: data.content,
        author: data.author,
        created: new Date(),
      });
      return newPost.save();
    },
    addComment: async (parent: any, data: Comment) => {
      const post = await PostModel.findById(data.id)
      if (post) {
        post.overwrite({
          title: post.title,
          content: post.content,
          author: post.author,
          created: post.created,
          comments: [
            ...(post.comments || []),
            {
              author: data.author,
              content: data.content,
              id: mongoose.Types.ObjectId(),
            },
          ]
        })
        await post.save()
      }
    },
    removePost: async (_: any, { id }: { id: string }) => {
      const post = PostModel.findById(id)
      if (post) {
        await post.remove()
      }
    },
    removeComment: async (_: any, { postId, commentId }: { postId: string, commentId: string }) => {
      const post = await PostModel.findById(postId)
      if (post) {
        post.overwrite({
          title: post.title,
          content: post.content,
          author: post.author,
          created: post.created,

          // comment.id is saved as a ObjectId
          comments: post.comments.filter((comment) => comment.id.toString() !== commentId)
        })
        await post.save()
      }
    }
  }
};



const startApolloServer = async () => {
  const graphqlServer = new ApolloServer({
    // Lägg till auth här. Contex funktionen körs innan varje graphql request.
    // context: async () =>
    typeDefs,
    resolvers,
  })

  await graphqlServer.start();

  app.use(cors())
  app.use(express.json())

  app.use('/api/users', users)
  app.use('/api/spell', spells)
  app.use('/api/items/type', itemTypes)
  app.use('/api/hero/template', heroTemplates)
  app.use('/api/enemies', enemies)
  app.use('/api/run', runs)
  app.use('/api/items/prefix', itemPrefixs)
  app.use('/api/items/suffix', itemSuffixs)
  app.use('/api/items/rarity', itemRaritys)

  const PORT = 5000

  // Use Express app as middleware in Apollo Server instance
  // graphQL server runs on :5000/graphql
  graphqlServer.applyMiddleware({ app });

  app.get('/', (_, res: any) => res.send('API is running..s'))

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

startApolloServer()


