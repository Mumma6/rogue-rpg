const initialState = {
  user: null,
  appState: 'login',
  auth: false,
}

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REGISTER_ACCOUNT':
      return {
        ...state,
        user: action.payload,
        appState: 'in-game',
      }
    case 'CREATE_ACCOUNT':
      return {
        ...state,
        appState: 'create-account',
      }
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
        appState: 'in-game',
      }
    case 'ADMIN_AREA':
      return {
        ...state,
        appState: 'admin-area',
      }
    case 'INGAME_PAGE':
      return {
        ...state,
        appState: 'in-game',
      }
    default:
      return state
  }
}

export default appReducer
