const initialState = {
  user: null,
  appState: 'login',
}

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REGISTER_ACCOUNT':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
        appState: 'in-game',
      }
    default:
      return state
  }
}

export default appReducer
