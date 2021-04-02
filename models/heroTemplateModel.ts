import mongoose from 'mongoose'

export interface IHeroTemplate extends mongoose.Document {
  name: string
  classType: string
  iconName: string
  attackRating: number
  defenceRating: number
  healthPoints: number
  manaPoints: number
  portraitUrl?: string
}

const heroTemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classType: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
  attackRating: {
    type: Number,
    required: true,
  },
  defenceRating: {
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
})

const HeroTemplate = mongoose.model<IHeroTemplate>(
  'HeroTemplate',
  heroTemplateSchema
)

export default HeroTemplate
