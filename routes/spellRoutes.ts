import express from 'express'
import {
  createSpell,
  deleteSpell,
  getAllSpells,
  updateSpell,
} from '../controllers/spellController'

const spells = express.Router()

spells
  .post('/', getAllSpells)
  .post('/create', createSpell)
  .post('/delete', deleteSpell)
  .post('/update', updateSpell)

export default spells
