import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(
      // put this in PROCESS.env sometime
      'mongodb+srv://svc-rpgdb-access:Consid345!@rpg.k2vnj.mongodb.net/Game?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
