const initialState = {
  user: null,
  gameState: 'login',
}

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REGISTER_ACCOUNT':
      return {
        ...state,
        user: action.payload,
      }
    default:
      break
  }
}

export default appReducer
