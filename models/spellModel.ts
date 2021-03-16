import mongoose from 'mongoose'

export interface ISpellModel extends mongoose.Document {
  name: string
  magicSchool: string
  damage: number
  healing: number
  icon?: string
}

const spellModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  magicSchool: {
    type: String,
    required: true,
  },
  icon: {
    // läggs i en asset map i frontend
    type: String,
  },
  damage: {
    type: Number,
    required: true,
  },
  healing: {
    type: Number,
    required: true,
  },
})

const SpellModel = mongoose.model<ISpellModel>('SpellModel', spellModel)

export default SpellModel
