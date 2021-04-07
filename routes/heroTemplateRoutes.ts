import express from 'express'
import {
  createHeroTemplate,
  deleteHeroTemplate,
  getAllHeroTemplates,
  updateHeroTemplate,
} from '../controllers/heroTemplateController'

const heroTemplates = express.Router()

import { protect } from '../middlewares/authMiddleware'

heroTemplates
  .post('/', protect, getAllHeroTemplates)
  .post('/create', protect, createHeroTemplate)
  .post('/delete', protect, deleteHeroTemplate)
  .post('/update', protect, updateHeroTemplate)

export default heroTemplates
