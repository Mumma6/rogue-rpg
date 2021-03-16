import express from 'express'
import {
  createSpell,
  deleteSpell,
  getAllSpells,
} from '../controllers/spellController'

const spells = express.Router()

spells
  .post('/', getAllSpells)
  .post('/create', createSpell)
  .post('/delete', deleteSpell)

export default spells
