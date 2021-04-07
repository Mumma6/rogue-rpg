import SpellModel from '../models/spellModel'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from './controllerFunctions'

// @desc    Create spell
// @route   POST /api/spell/create
const createSpell = createFunction(SpellModel)

// @desc    delete spell
// @route   POST /api/spell/delete
const deleteSpell = deleteFunction(SpellModel)

// @desc    fetch all spells
// @route   POST /api/spell/
const getAllSpells = getAllFunction(SpellModel)

// @desc    update spell
// @route   POST /api/spell/update
const updateSpell = updateFunction(SpellModel)

export { createSpell, deleteSpell, getAllSpells, updateSpell }
