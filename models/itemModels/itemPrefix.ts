import mongoose from 'mongoose'

export interface IItemPrefix extends mongoose.Document {
  name: string
  levelRangeFrom: string
  levelRangeTo: string
  frequency: number
  stats: string
}

const itemPrefixSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  levelRangeFrom: {
    type: Number,
    required: true,
  },
  levelRangeTo: {
    type: Number,
    required: true,
  },
  frequency: {
    type: Number,
    required: true,
  },
  stats: {
    type: String,
  },
})

const ItemPrefix = mongoose.model<IItemPrefix>('ItemPrefix', itemPrefixSchema)

export default ItemPrefix
