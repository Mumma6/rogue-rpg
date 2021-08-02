import express from 'express'
import {
  loginUser,
  registerUser,
  deleteUser,
  verifyUserJWT,
  getAllUsers,
  updateUser,
} from '../controllers/userController'

import { protect } from '../middlewares/authMiddleware'

const users = express.Router()

users
  .get('/', getAllUsers )
  .post('/login', loginUser)
  .post('/register', registerUser)
  .delete('/:id', deleteUser)
  .post('/verifyjwt', verifyUserJWT)
  .post('/update', updateUser)

export default users
