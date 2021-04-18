import ItemPrefix from '../../models/itemModels/itemPrefix'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from '../controllerFunctions'

// @desc    Create item Prefix
// @route   POST /api/items/prefix/create
const createItemPrefix = createFunction(ItemPrefix)

// @desc    delete item Prefix
// @route   POST /api/items/prefix/delete
const deleteItemPrefix = deleteFunction(ItemPrefix)

// @desc    fetch all item Prefixs
// @route   POST /api/items/prefix/
const getAllItemPrefixs = getAllFunction(ItemPrefix)

export { createItemPrefix, deleteItemPrefix, getAllItemPrefixs }
