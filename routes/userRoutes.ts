import express from 'express'
import {
  loginUser,
  registerUser,
  deleteUser,
  verifyUserJWT,
} from '../controllers/userController'

const users = express.Router()

users
  .post('/login', loginUser)
  .post('/register', registerUser)
  .delete('/:id', deleteUser)
  .post('/verifyjwt', verifyUserJWT)

export default users
