import bcrypt from 'bcryptjs'
import User from '../models/userModel'
import { Request, Response } from 'express'
var jwt = require('jsonwebtoken');
var config = require('../config');


const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

const comparePassword = async (password: string, userPassword: string) =>
  await bcrypt.compare(password, userPassword)

// @desc    Auth user & get token
// @route   POST /api/users/login
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await comparePassword(password, user.password))) {
    var jwt = require('jsonwebtoken');
    var token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.json({
      _id: user._id,
      email: user.email,
      role: user.role,
      rougelike_jwt: token,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
}

// @desc    Register a new user
// @route   POST /api/users/register
const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    const hashedPassword = await hashPassword(password)

    const user = await User.create({
      email,
      password: hashedPassword,
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      Error: `Request error occured: ${error}`,
    })
  }
}

// @desc    Delete user
// @route   DELETE /api/users/:id
const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}
// @desc    Verify user jwt
// @route   POST /api/users/verifyJWT
const verifyUserJWT = async (req: Request, res: Response) => {
  console.log(req.body.jwt)
  var token = req.body.jwt
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, config.jwtSecret, async function (err: Error, decoded: any) {
    console.log(err)
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    const userId = decoded.id
    console.log(userId)
    const user = await User.findById(userId)
    if (user) {
      res.json({
        _id: user._id,
        email: user.email,
        role: user.role,
      })
    }
    else {
      res.status(400)
      throw new Error('Not able to find user data')

    }
  });


}

export { loginUser, registerUser, deleteUser, verifyUserJWT }
