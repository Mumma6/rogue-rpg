import ItemType from '../../models/itemModels/itemTypeModel'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from '../controllerFunctions'

// @desc    Create item type
// @route   POST /api/items/type/create
const createItemType = createFunction(ItemType)

// @desc    delete item type
// @route   POST /api/items/type/delete
const deleteItemType = deleteFunction(ItemType)

// @desc    fetch all item types
// @route   POST /api/items/type/
const getAllItemTypes = getAllFunction(ItemType)

export { createItemType, deleteItemType, getAllItemTypes }
