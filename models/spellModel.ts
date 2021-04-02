import mongoose from 'mongoose'

export interface ISpellModel extends mongoose.Document {
  name: string
  magicSchool: string
  manaCost: number
  cooldown: number
  tooltip: string
  iconName: string
  targetType: string
  damageTarget: number
  damageSelf: number
  healingTarget: number
  healingSelf: number
  applyBuffTarget: number
  applyBuffSelf: number
  applyBuffDuration: number

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
  manaCost: {
    type: Number,
    required: true,
  },
  cooldown: {
    type: Number,
    required: true,
  },
  tooltip: {
    type: String,
    required: true,
  },
  iconName: {
    // läggs i en asset map i frontend
    type: String,
    required: true,
  },
  targetType: {
    type: String,
    required: true,
  },
  damageTarget: {
    type: Number,
    required: true,
  },
  damageSelf: {
    type: Number,
    required: true,
  },
  healingTarget: {
    type: Number,
    required: true,
  },
  healingSelf: {
    type: Number,
    required: true,
  },
  applyBuffTarget: {
    type: Number,
    required: true,
  },
  applyBuffSelf: {
    type: Number,
    required: true,
  },
  applyBuffDuration: {
    type: Number,
    required: true,
  },

})

const SpellModel = mongoose.model<ISpellModel>('SpellModel', spellModel)

export default SpellModel
