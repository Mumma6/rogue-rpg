import mongoose from 'mongoose'
import { IHero } from './heroModel'

interface IRun extends mongoose.Document {
  user_id: string
  heros: IHero
  layer?: number
  zone?: string
}

const runSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  hero: {
    type: Object,
    required: true,
  },
  layer: {
    type: Number,
  },
  zone: {
    type: String,
  },
})

const Run = mongoose.model<IRun>('Run', runSchema)

export default Run
