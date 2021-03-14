import bcrypt from 'bcryptjs'
import User from '../models/userModel'
import { Request, Response } from 'express'

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
  console.log(user)

  if (user && (await comparePassword(password, user.password))) {
    // jwt här
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    })
  } else {
    res.status(401)
    //throw new Error('Invalid email or password')aaa
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

export { loginUser, registerUser, deleteUser }
