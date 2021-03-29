import ItemType, { IItemType } from '../../models/itemModels/itemTypeModel'
import { Request, Response } from 'express'

// @desc    Create item type
// @route   POST /api/items/type/create
const createItemType = async (req: Request, res: Response) => {
  try {
    const { name, levelRangeFrom, icon, levelRangeTo, frequency } = <IItemType>(
      req.body
    )
    const itemType = await ItemType.findOne({ name })

    if (itemType) {
      res.status(400)
      throw new Error('Item type already exists')
    }

    const newItemType = await ItemType.create({
      name,
      levelRangeFrom,
      icon,
      levelRangeTo,
      frequency,
    })

    if (newItemType) {
      res.status(201).json({
        _id: newItemType._id,
        name,
        levelRangeFrom,
        icon,
        levelRangeTo,
        frequency,
      })
    } else {
      res.status(400)
      throw new Error('Invalid itemType data')
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      Error: `Request error occured: ${error}`,
    })
  }
}

// @desc    delete item type
// @route   POST /api/items/type/delete
const deleteItemType = async (req: Request, res: Response) => {
  const itemType = await ItemType.findById(req.body.id)
  if (itemType) {
    await itemType.remove()
    res.json({ id: itemType._id })
  } else {
    res.status(404)
    throw new Error('itemType not found')
  }
}

// @desc    fetch all hero template
// @route   POST /api/items/type/
const getAllItemTypes = async (_: Request, res: Response) => {
  const itemType = await ItemType.find({}) // empty filter will return all docs

  if (itemType) {
    res.json(itemType)
  } else {
    res.status(404)
    throw new Error('Templates not found')
  }
}

export { createItemType, deleteItemType, getAllItemTypes }
