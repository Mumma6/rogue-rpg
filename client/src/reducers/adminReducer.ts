import types from './types'

// TODO, 

/*
* dela upp i flera reducers
* skapa interface för allt
*/

export interface ISpells {
  name: string
  magicSchool: string
  manaCost: string | number
  cooldown: string | number
  tooltip: string
  iconName: string
  targetType: string
  damageTarget: string | number
  damageSelf: string | number
  healingTarget: string | number
  healingSelf: string | number
  applyBuffTarget: string | number
  applyBuffSelf: string | number
  applyBuffDuration: string | number
}

interface IInitialState {
  heroTemplates: any[] // TODO
  spells: ISpells[]
  itemTypes: any[] // TODO
  enemies: any[] // TODO
  itemPrefixs: any[]
  itemSuffix: any[]
  itemRarity: any[]
}

const initialState: IInitialState = {
  heroTemplates: [],
  spells: [],
  itemTypes: [],
  enemies: [],
  itemPrefixs: [],
  itemSuffix: [],
  itemRarity: [],
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

    // Items
    // Type
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

    // Prefix
    case types.CREATE_ITEM_PREFIX:
      return {
        ...state,
        itemPrefixs: [...state.itemPrefixs, payload],
      }
    case types.GET_ALL_ITEM_PREFIXS:
      return {
        ...state,
        itemPrefixs: payload,
      }
    case types.DELETE_ITEM_PREFIX:
      return {
        ...state,
        itemPrefixs: filterIdFromArray(state.itemPrefixs, payload.id),
      }

    // Suffix
    case types.CREATE_ITEM_SUFFIX:
      return {
        ...state,
        itemSuffix: [...state.itemSuffix, payload],
      }
    case types.GET_ALL_ITEM_SUFFIXS:
      return {
        ...state,
        itemSuffix: payload,
      }
    case types.DELETE_ITEM_SUFFIX:
      return {
        ...state,
        itemSuffix: filterIdFromArray(state.itemPrefixs, payload.id),
      }

    // Rarity
    case types.CREATE_ITEM_RARITY:
      return {
        ...state,
        itemRarity: [...state.itemRarity, payload],
      }
    case types.GET_ALL_ITEM_RARITYS:
      return {
        ...state,
        itemRarity: payload,
      }
    case types.DELETE_ITEM_RARITY:
      return {
        ...state,
        itemRarity: filterIdFromArray(state.itemPrefixs, payload.id),
      }

    // Enemis
    case types.CREATE_ENEMIE:
      return {
        ...state,
        enemies: [...state.enemies, payload],
      }
    case types.UPDATE_ENEMIE:
      return {
        ...state,
        enemies: [...filterIdFromArray(state.enemies, payload._id), payload],
      }
    case types.GET_ALL_ENEMIES:
      return {
        ...state,
        enemies: payload,
      }
    case types.DELETE_ENEMIE:
      return {
        ...state,
        enemies: filterIdFromArray(state.enemies, payload.id),
      }
    default:
      return state
  }
}

export default adminReducer
