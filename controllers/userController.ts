import bcrypt from 'bcryptjs'
import User from '../models/userModel'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import users from '../routes/userRoutes'
const config = require('../config')

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
    const token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: 86400, // expires in 24 hours
    })
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
  const token = req.body.jwt
  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' })

  jwt.verify(
    token,
    config.jwtSecret,
    async (err: jwt.VerifyErrors | null, decoded: any) => {
      if (err) {
        return res
          .status(500)
          .send({ auth: false, message: 'Failed to authenticate token.' })
      }

      const userId = decoded.id
      const user = await User.findById(userId)
      if (user) {
        res.json({
          _id: user._id,
          email: user.email,
          role: user.role,
        })
      } else {
        res.status(400)
        throw new Error('Not able to find user data')
      }
    }
  )
}

// @desc    Fetch all users
// @route   POST /api/users/
const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({})

  if (users) {
    res.json(users)
  } else {
    res.status(404)
    throw new Error('Users not found')
  }
}

// @desc    Update user
// @route   POST /api/users/update
const updateUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.body._id)

  if (user) {
    user.overwrite({ ...req.body })
    const updateUser = await user.save()
    res.json(updateUser)
  } else {
    res.status(404)
    throw new Error('Users not found')
  }
}

// i frontend

// lista alla users


/*

Users behöver inte vara i redux storen, skapa en useAxios hook istället.

tryck på dom för att editera, ska kunna ta bort och ändra roll. Vissa alla
karaktärer som är kopplade till varje user
visa email, role, created osv. 



*/

export { loginUser, registerUser, deleteUser, verifyUserJWT, getAllUsers, updateUser }
