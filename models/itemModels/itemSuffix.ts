import mongoose from 'mongoose'

export interface IItemSuffix extends mongoose.Document {
  name: string
  levelRangeFrom: string
  levelRangeTo: string
  frequency: number
}

const itemSuffixSchema = new mongoose.Schema({
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
})

const ItemSuffix = mongoose.model<IItemSuffix>('ItemSuffix', itemSuffixSchema)

export default ItemSuffix
