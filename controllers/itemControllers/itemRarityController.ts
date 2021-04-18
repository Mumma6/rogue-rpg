import ItemRarity from '../../models/itemModels/itemRarity'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from '../controllerFunctions'

// @desc    Create item Rarity
// @route   POST /api/items/rarity/create
const createItemRarity = createFunction(ItemRarity)

// @desc    delete item Rarity
// @route   POST /api/items/rarity/delete
const deleteItemRarity = deleteFunction(ItemRarity)

// @desc    fetch all item Raritys
// @route   POST /api/items/rarity/
const getAllItemRaritys = getAllFunction(ItemRarity)

export { createItemRarity, deleteItemRarity, getAllItemRaritys }
