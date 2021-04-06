import { Request, Response } from 'express'
import mongoose from 'mongoose'

interface CreateOptions {
  model: typeof mongoose.Model
}

const create = (options: CreateOptions) => async (
  req: Request,
  res: Response
) => {
  const { name } = req.body
  try {
    const exist = await options.model.findOne({ name })

    if (exist) {
      res.status(400)
      throw new Error('Already exist')
    }

    const created = await options.model.create(req.body)

    if (created) {
      res.status(201).json({
        _id: created._id,
        ...created,
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

export { create }
