import express from 'express'
import {
  createSpell,
  deleteSpell,
  getAllSpells,
  updateSpell,
} from '../controllers/spellController'

import { protect } from '../middlewares/authMiddleware'

const spells = express.Router()

spells
  .post('/', protect, getAllSpells)
  .post('/create', protect, createSpell)
  .post('/delete', protect, deleteSpell)
  .post('/update', protect, updateSpell)

export default spells
