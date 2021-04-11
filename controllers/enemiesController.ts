import Enemies from '../models/enemiesModel'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from './controllerFunctions'

// @desc    Create hero Enemies
// @route   POST /api/hero/enemies/create
const createHeroEnemies = createFunction(Enemies)

// @desc    delete hero Enemies
// @route   POST /api/hero/enemies/delete
const deleteEnemies = deleteFunction(Enemies)

// @desc    fetch all hero Enemies
// @route   POST /api/hero/enemies/
const getAllEnemiess = getAllFunction(Enemies)

// @desc    update hero Enemies
// @route   POST /api/hero/enemies/update
const updateEnemies = updateFunction(Enemies)

export { createHeroEnemies, deleteEnemies, updateEnemies, getAllEnemiess }
