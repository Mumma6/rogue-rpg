import { Request, Response } from 'express'
import mongoose from 'mongoose'

type Model = typeof mongoose.Model

const createFunction = (model: Model) => async (
  req: Request,
  res: Response
) => {
  const { name } = req.body
  try {
    const exist = await model.findOne({ name: name || '' })
    if (exist) {
      res.status(400)
      throw new Error('Already exist')
    }
    const created = await model.create(req.body)
    if (created) {
      res.status(201).json({
        _id: created._id,
        ...created._doc,
      })
    } else {
      res.status(400)
      throw new Error('Invalid data')
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      Error: `Request error occured: ${error}`,
    })
  }
}

const deleteFunction = (model: Model) => async (
  req: Request,
  res: Response
) => {
  const item = await model.findById(req.body.id)
  if (item) {
    await item.remove()
    res.json({ id: item._id })
  } else {
    res.status(404)
    throw new Error('Item not found')
  }
}

const getAllFunction = (model: Model) => async (
  _req: Request,
  res: Response
) => {
  const items = await model.find({}) // empty filter will return all docs

  if (items) {
    res.json(items)
  } else {
    res.status(404)
    throw new Error('Items not found')
  }
}

const updateFunction = (model: Model) => async (
  req: Request,
  res: Response
) => {
  const item = await model.findById(req.body._id)
  if (item) {
    item.overwrite({ ...req.body })
    const updatedItem = await item.save()
    res.json(updatedItem)
  } else {
    res.status(404)
    throw new Error('Item not found')
  }
}

export { createFunction, deleteFunction, getAllFunction, updateFunction }
