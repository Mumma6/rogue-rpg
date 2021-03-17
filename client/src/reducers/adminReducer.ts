const initialState = {
  heroTemplates: [],
  spells: [],
}

const filterIdFromArray = (arr: any[], id: string) =>
  arr.filter(({ _id }) => _id !== id)

const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
        heroTemplates: filterIdFromArray(
          state.heroTemplates,
          action.payload.id
        ),
      }
    case 'CREATE_SPELL':
      return {
        ...state,
        spells: [...state.spells, action.payload],
      }
    case 'GET_ALL_SPELLS':
      return {
        ...state,
        spells: action.payload,
      }
    case 'DELETE_SPELL':
      return {
        ...state,
        spells: filterIdFromArray(state.spells, action.payload.id),
      }
    default:
      return state
  }
}

export default adminReducer