import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
const config = require('../config')

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = Array.isArray(req.headers['x-access-token'])
    ? req.headers['x-access-token'][0]
    : req.headers['x-access-token']

  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' })
  }

  jwt.verify(token, config.jwtSecret, (err: jwt.VerifyErrors | null) => {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })
    }
  })
  next()
}
