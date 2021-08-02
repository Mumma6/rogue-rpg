import mongoose from 'mongoose'

export interface IPost extends mongoose.Document {
  title: string,
  content: string,
  author: string,
  comments: any[],
}

const postModel = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
  },
  comments: {
    type: Array,
  }
})

const PostModel = mongoose.model<IPost>('PostModel', postModel)

export default PostModel