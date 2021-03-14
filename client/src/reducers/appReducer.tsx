const initialState = {
  user: null,
  appState: 'login',
  auth: false,
  heroTemplates: [],
}

// combinedReducer

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
    // behöver göra en egen reducer för admin stuff
    case 'ADMIN_AREA':
      return {
        ...state,
        appState: 'admin-area',
      }
    case 'CREATE_HEROTEMPLATE':
      return {
        ...state,
        heroTemplates: [...state.heroTemplates, action.payload],
      }
    case 'GET_ALL_HEROTEMPLATE':
      return {
        ...state,
        heroTemplates: action.payload,
      }
    case 'DELETE_HEROTEMPLATE':
      return {
        ...state,
        heroTemplates: state.heroTemplates.filter(
          (hero: any) => hero._id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export default appReducer
