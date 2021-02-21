import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(
      // put this in PROCESS.env sometime
      'mongodb+srv://martin:rpg123@cluster0.k2vnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )

    console.log('MongoDB connected')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
