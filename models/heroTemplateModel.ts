import mongoose from 'mongoose'

interface IHeroTemplate extends mongoose.Document {
  name: string
  class: string
  portraitUrl: string
  attackRating: number
  defenceRating: number
  healthPoints: number
  manaPoints: number
}

const heroTemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  portraitUrl: {
    // läggs i en asset map i frontend
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
