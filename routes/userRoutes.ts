import express from 'express'
import {
  loginUser,
  registerUser,
  deleteUser,
} from '../controllers/userController'

const users = express.Router()

users
  .post('/login', loginUser)
  .post('/register', registerUser)
  .delete('/:id', deleteUser)

export default users
