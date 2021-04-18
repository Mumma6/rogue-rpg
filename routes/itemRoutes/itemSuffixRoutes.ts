import express from 'express'
import {
  createItemSuffix,
  deleteItemSuffix,
  getAllItemSuffixs,
} from '../../controllers/itemControllers/itemSuffixController'
import { protect } from '../../middlewares/authMiddleware'

const itemSuffixs = express.Router()

itemSuffixs
  .post('/', protect, getAllItemSuffixs)
  .post('/create', protect, createItemSuffix)
  .post('/delete', protect, deleteItemSuffix)

export default itemSuffixs
