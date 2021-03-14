import express from 'express'
import {
  createHeroTemplate,
  deleteHeroTemplate,
  getAllHeroTemplates,
} from '../controllers/heroTemplateController'

const heroTemplates = express.Router()

heroTemplates
  .post('/', getAllHeroTemplates)
  .post('/create', createHeroTemplate)
  .post('/delete', deleteHeroTemplate)

export default heroTemplates
