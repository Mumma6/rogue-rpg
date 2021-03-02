import mongoose from 'mongoose'
import { IHero } from './heroModel'

interface IRun extends mongoose.Document {
  user_id: string
  heros: IHero[]
  layer: number
  zone: string
}

const runSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  heros: {
    type: Array,
    required: true,
  },
  layer: {
    type: Number,
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
})

const Run = mongoose.model<IRun>('Run', runSchema)

export default Run
