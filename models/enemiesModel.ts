import mongoose from 'mongoose'

interface IEnemies extends mongoose.Document {
  name: string
  type: string
  rarity: number
  abilities: any[]
  healthPoints: number
  manaPoints: number
}

const enemiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    rarity: {
      type: Number,
      required: true,
    },
    healthPoints: {
      type: Number,
      required: true,
    },
    manaPoints: {
      type: Number,
      required: true,
    },
    abilities: {
      type: Array,
      default: [],
    },
    iconName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Enemies = mongoose.model<IEnemies>('Enemies', enemiesSchema)

export default Enemies
