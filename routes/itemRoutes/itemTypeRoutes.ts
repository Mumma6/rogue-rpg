import express from 'express'
import {
  createItemType,
  deleteItemType,
  getAllItemTypes,
} from '../../controllers/itemControllers/itemTypeController'
import { protect } from '../../middlewares/authMiddleware'

const itemTypes = express.Router()

itemTypes
  .post('/', protect, getAllItemTypes)
  .post('/create', protect, createItemType)
  .post('/delete', protect, deleteItemType)

export default itemTypes
