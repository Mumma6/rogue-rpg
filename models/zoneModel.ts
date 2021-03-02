import mongoose from 'mongoose'

interface IZone extends mongoose.Document {
  name: string
  backgroundUrl: string
}

const zoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  backgroundUrl: {
    type: String,
    required: true,
  },
})

const Zone = mongoose.model<IZone>('Zone', zoneSchema)

export default Zone
