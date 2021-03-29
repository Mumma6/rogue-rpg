import express from 'express'
import {
  createItemType,
  deleteItemType,
  getAllItemTypes,
} from '../../controllers/itemControllers/itemTypeController'

const itemTypes = express.Router()

itemTypes
  .post('/', getAllItemTypes)
  .post('/create', createItemType)
  .post('/delete', deleteItemType)

export default itemTypes
