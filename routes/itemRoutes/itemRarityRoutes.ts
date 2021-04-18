import express from 'express'
import {
  createItemRarity,
  deleteItemRarity,
  getAllItemRaritys,
} from '../../controllers/itemControllers/itemRarityController'
import { protect } from '../../middlewares/authMiddleware'

const itemRaritys = express.Router()

itemRaritys
  .post('/', protect, getAllItemRaritys)
  .post('/create', protect, createItemRarity)
  .post('/delete', protect, deleteItemRarity)

export default itemRaritys
