import express from 'express'
import {
  createHeroTemplate,
  deleteHeroTemplate,
  getAllHeroTemplates,
  updateHeroTemplate,
} from '../controllers/heroTemplateController'

const heroTemplates = express.Router()

heroTemplates
  .post('/', getAllHeroTemplates)
  .post('/create', createHeroTemplate)
  .post('/delete', deleteHeroTemplate)
  .post('/update', updateHeroTemplate)

export default heroTemplates
