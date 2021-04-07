import types from './types'
const initialState = {
  heroTemplates: [],
  spells: [],
  itemTypes: [],
}

const filterIdFromArray = (arr: any[], id: string) =>
  arr.filter(({ _id }) => _id !== id)

const adminReducer = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case types.CREATE_HEROTEMPLATE:
      return {
        ...state,
        heroTemplates: [...state.heroTemplates, payload],
      }
    case types.GET_ALL_HEROTEMPLATE:
      return {
        ...state,
        heroTemplates: payload,
      }
    case types.UPDATE_HEROTEMPLATE:
      return {
        ...state,
        heroTemplates: [
          ...filterIdFromArray(state.heroTemplates, payload._id),
          payload,
        ],
      }
    case types.DELETE_HEROTEMPLATE:
      return {
        ...state,
        heroTemplates: filterIdFromArray(state.heroTemplates, payload.id),
      }
    case types.CREATE_SPELL:
      return {
        ...state,
        spells: [...state.spells, payload],
      }
    case types.UPDATE_SPELL:
      return {
        ...state,
        spells: [...filterIdFromArray(state.spells, payload._id), payload],
      }
    case types.GET_ALL_SPELLS:
      return {
        ...state,
        spells: payload,
      }
    case types.DELETE_SPELL:
      return {
        ...state,
        spells: filterIdFromArray(state.spells, payload.id),
      }
    case types.CREATE_ITEM_TYPE:
      return {
        ...state,
        itemTypes: [...state.itemTypes, payload],
      }
    case types.GET_ALL_ITEM_TYPES:
      return {
        ...state,
        itemTypes: payload,
      }
    case types.DELETE_ITEM_TYPE:
      return {
        ...state,
        itemTypes: filterIdFromArray(state.itemTypes, payload.id),
      }
    default:
      return state
  }
}

export default adminReducer
