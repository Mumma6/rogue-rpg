import types from './types'
const initialState = {
  user: null,
  appState: 'login',
  auth: false,
}

interface IUser {
  email: string
  role: string
}

interface IActions {
  type: string
  payload: any
}
const appReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case types.REGISTER_ACCOUNT:
      return {
        ...state,
        user: action.payload as IUser,
        appState: 'in-game',
      }
    case types.CREATE_ACCOUNT:
      return {
        ...state,
        appState: 'create-account',
      }
    case types.LOGIN_USER:
      return {
        ...state,
        user: action.payload as IUser,
        appState: 'in-game',
      }
    case types.VERIFY_JWT:
      return {
        ...state,
        user: action.payload as IUser,
        appState: 'in-game',
      }
    case types.DISPLAY_LOGIN:
      return {
        ...state,
        appState: 'login',
      }
    case types.ADMIN_AREA:
      return {
        ...state,
        appState: 'admin-area',
      }
    case types.INGAME_PAGE:
      return {
        ...state,
        appState: 'in-game',
      }
    case types.LOG_OUT:
      localStorage.removeItem('rougelike_jwt')
      return initialState
    default:
      return state
  }
}

export default appReducer
