import dispatchCurried from './actionsUtils'
import { createAccountConfig, loginUserConfig, verifyJWTConfig } from './actionConfigs'

export const createAccount = (data: object) =>
  dispatchCurried(createAccountConfig, data)

export const loginUser = (data: Object) =>
  dispatchCurried(loginUserConfig, data)

export const verifyJWT = (data: Object) =>
  dispatchCurried(verifyJWTConfig, data)

