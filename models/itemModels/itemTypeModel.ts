import mongoose from 'mongoose'

export interface IItemType extends mongoose.Document {
  name: string
  levelRangeFrom: string
  levelRangeTo: string
  frequency: number
  icon?: string
}

// can create nested ovject types with
/*  
type: Map
of: String 


and arrays with 
type: [Number]
*/

const itemTypeSchema = new mongoose.Schema({
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
  icon: {
    type: String,
  },
})

const ItemType = mongoose.model<IItemType>('ItemType', itemTypeSchema)

export default ItemType
