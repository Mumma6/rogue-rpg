import express from 'express'
import {
  createItemPrefix,
  deleteItemPrefix,
  getAllItemPrefixs,
} from '../../controllers/itemControllers/itemPrefixController'
import { protect } from '../../middlewares/authMiddleware'

const itemPrefixs = express.Router()

itemPrefixs
  .post('/', protect, getAllItemPrefixs)
  .post('/create', protect, createItemPrefix)
  .post('/delete', protect, deleteItemPrefix)

export default itemPrefixs
