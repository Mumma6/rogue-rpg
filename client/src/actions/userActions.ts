import dispatchCurried from './actionsUtils'
import { createAccountConfig, loginUserConfig } from './actionConfigs'

export const createAccount = (data: object) =>
  dispatchCurried(createAccountConfig, data)

export const loginUser = (data: Object) =>
  dispatchCurried(loginUserConfig, data)
