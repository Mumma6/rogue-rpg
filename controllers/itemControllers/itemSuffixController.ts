import ItemSuffix from '../../models/itemModels/itemSuffix'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from '../controllerFunctions'

// @desc    Create item Suffix
// @route   POST /api/items/suffix/create
const createItemSuffix = createFunction(ItemSuffix)

// @desc    delete item Suffix
// @route   POST /api/items/suffix/delete
const deleteItemSuffix = deleteFunction(ItemSuffix)

// @desc    fetch all item Suffixs
// @route   POST /api/items/suffix/
const getAllItemSuffixs = getAllFunction(ItemSuffix)

export { createItemSuffix, deleteItemSuffix, getAllItemSuffixs }
