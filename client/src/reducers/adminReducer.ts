import types from './types'
const initialState = {
  heroTemplates: [],
  spells: [],
  itemTypes: [],
}

const filterIdFromArray = (arr: any[], id: string) =>
  arr.filter(({ _id }) => _id !== id)

const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_HEROTEMPLATE:
      return {
        ...state,
        heroTemplates: [...state.heroTemplates, action.payload],
      }
    case types.GET_ALL_HEROTEMPLATE:
      return {
        ...state,
        heroTemplates: action.payload,
      }
    case types.DELETE_HEROTEMPLATE:
      return {
        ...state,
        heroTemplates: filterIdFromArray(
          state.heroTemplates,
          action.payload.id
        ),
      }
    case types.CREATE_SPELL:
      return {
        ...state,
        spells: [...state.spells, action.payload],
      }
    case types.UPDATE_SPELL:
      return {
        ...state,
        spells: [
          ...filterIdFromArray(state.spells, action.payload._id),
          action.payload,
        ],
      }
    case types.GET_ALL_SPELLS:
      return {
        ...state,
        spells: action.payload,
      }
    case types.DELETE_SPELL:
      return {
        ...state,
        spells: filterIdFromArray(state.spells, action.payload.id),
      }
    case types.CREATE_ITEM_TYPE:
      return {
        ...state,
        itemTypes: [...state.itemTypes, action.payload],
      }
    case types.GET_ALL_ITEM_TYPES:
      return {
        ...state,
        itemTypes: action.payload,
      }
    case types.DELETE_ITEM_TYPE:
      return {
        ...state,
        itemTypes: filterIdFromArray(state.itemTypes, action.payload.id),
      }
    default:
      return state
  }
}

export default adminReducer
