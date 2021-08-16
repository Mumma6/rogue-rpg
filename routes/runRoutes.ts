import express from 'express'
import {
  createRun,
  deleteRun,
  getAllRuns,
  updateRun,
} from '../controllers/RunController'

import { protect } from '../middlewares/authMiddleware'

const runs = express.Router()

runs
  .get('/', protect, getAllRuns)
  .post('/create', protect, createRun)
  .post('/delete', protect, deleteRun)
  .post('/update', protect, updateRun)

export default runs
