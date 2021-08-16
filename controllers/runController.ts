import RunModel from '../models/runModel'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from './controllerFunctions'

// @desc    Create Run
// @route   POST /api/run/create
const createRun = createFunction(RunModel)

// @desc    delete Run
// @route   POST /api/run/delete
const deleteRun = deleteFunction(RunModel)

// @desc    fetch all Runs
// @route   POST /api/run/
const getAllRuns = getAllFunction(RunModel)

// @desc    update Run
// @route   POST /api/run/update
const updateRun = updateFunction(RunModel)

export { createRun, deleteRun, getAllRuns, updateRun }
