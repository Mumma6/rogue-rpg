import mongoose from 'mongoose'

export interface IItemRarity extends mongoose.Document {
  name: string
  levelRangeFrom: string
  levelRangeTo: string
  frequency: number
}

const itemRaritySchema = new mongoose.Schema({
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

const ItemRarity = mongoose.model<IItemRarity>('ItemRarity', itemRaritySchema)

export default ItemRarity
