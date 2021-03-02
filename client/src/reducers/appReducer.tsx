const initialState = {
  user: null,
  appState: 'login',
}

const appReducer = (state = initialState, action: any) => {
  console.log(action.payload)
  switch (action.type) {
    case 'REGISTER_ACCOUNT':
      return {
        ...state,
        user: action.payload,
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
    default:
      return state
  }
}

export default appReducer
