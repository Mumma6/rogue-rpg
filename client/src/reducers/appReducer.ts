import types from './types'

interface IHero {
  _id: string,
  name: string,
  attackRating: string,
  defenceRating: string,
  classType: string,
  healthPoints: string,
  manaPoints: string,
  iconName: string,
}

interface IRun {
  hero: IHero,
}



interface IUser {
  email: string
  role: string
  _id?: string,
}

interface IActions {
  type: string
  payload: any
}

interface IInitialState {
  user: null | IUser,
  appState: string,
  auth: boolean,
  run: IRun | null
}

const initialState: IInitialState = {
  user: null,
  appState: 'login',
  auth: false,
  run: null,
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
    case types.FORUM_AREA:
      return {
        ...state,
        appState: 'forum-area',
      }
    case types.INGAME_PAGE:
      return {
        ...state,
        appState: 'in-game',
      }
    case types.STARTRUN_PAGE:
      return {
        ...state,
        appState: 'startrun-area',
      }
    case types.CREATE_RUN:
    case types.SET_RUN:
      return {
        ...state,
        appState: 'inrun-area',
        run: action.payload,
      }

      case types.END_RUN:
      return {
        ...state,
        appState: 'in-game',
        run: null,
      }

    case types.LOG_OUT:
      localStorage.removeItem('rougelike_jwt')
      return initialState
    default:
      return state
  }
}

export default appReducer
