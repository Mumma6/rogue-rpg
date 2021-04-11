import express from 'express'
import {
  createHeroEnemies,
  deleteEnemies,
  getAllEnemiess,
  updateEnemies,
} from '../controllers/enemiesController'

import { protect } from '../middlewares/authMiddleware'

const enemies = express.Router()

enemies
  .post('/', protect, getAllEnemiess)
  .post('/create', protect, createHeroEnemies)
  .post('/delete', protect, deleteEnemies)
  .post('/update', protect, updateEnemies)

export default enemies
