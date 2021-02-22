import mongoose from 'mongoose'

interface IUser extends mongoose.Document {
  email: string
  name: string
  password: string
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model<IUser>('User', userSchema)

export default User