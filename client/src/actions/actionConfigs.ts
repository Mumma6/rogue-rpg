import { DispatchConfig } from './actionsUtils'
import types from '../reducers/types'
// Add to PROCESS.env ...
const HERO_TEMPLATE_API_ENDPOINT = 'http://localhost:5000/api/hero/template'
const SPELL_API_ENDPOINT = 'http://localhost:5000/api/spell'
const ITEM_TYPE_API_ENDPOINT = 'http://localhost:5000/api/items/type'
const USERS_API_ENDPOINT = 'http://localhost:5000/api/users'
const ENEMIES_API_ENDPOINT = 'http://localhost:5000/api/enemies'
const ITEM_PREFIX_API_ENDPOINT = 'http://localhost:5000/api/items/prefix'
const ITEM_SUFFIX_API_ENDPOINT = 'http://localhost:5000/api/items/suffix'
const ITEM_RARITY_API_ENDPOINT = 'http://localhost:5000/api/items/rarity'

export const createHeroConfig: DispatchConfig = {
  API: `${HERO_TEMPLATE_API_ENDPOINT}/create`,
  type: types.CREATE_HEROTEMPLATE,
}

export const getAllHerosConfig: DispatchConfig = {
  API: `${HERO_TEMPLATE_API_ENDPOINT}/`,
  type: types.GET_ALL_HEROTEMPLATE,
}

export const deleteHeroConfig: DispatchConfig = {
  API: `${HERO_TEMPLATE_API_ENDPOINT}/delete`,
  type: types.DELETE_HEROTEMPLATE,
}

export const updateHeroConfig: DispatchConfig = {
  API: `${HERO_TEMPLATE_API_ENDPOINT}/update`,
  type: types.UPDATE_HEROTEMPLATE,
}

export const getAllSpellsConfig: DispatchConfig = {
  API: `${SPELL_API_ENDPOINT}/`,
  type: types.GET_ALL_SPELLS,
}

export const createSpellsConfig: DispatchConfig = {
  API: `${SPELL_API_ENDPOINT}/create`,
  type: types.CREATE_SPELL,
}

export const updateSpellConfig: DispatchConfig = {
  API: `${SPELL_API_ENDPOINT}/update`,
  type: types.UPDATE_SPELL,
}

export const deleteSpellConfig: DispatchConfig = {
  API: `${SPELL_API_ENDPOINT}/delete`,
  type: types.DELETE_SPELL,
}

export const createItemTypeConfig: DispatchConfig = {
  API: `${ITEM_TYPE_API_ENDPOINT}/create`,
  type: types.CREATE_ITEM_TYPE,
}

export const deleteItemTypeConfig: DispatchConfig = {
  API: `${ITEM_TYPE_API_ENDPOINT}/delete`,
  type: types.DELETE_ITEM_TYPE,
}

export const getAllItemTypesConfig: DispatchConfig = {
  API: `${ITEM_TYPE_API_ENDPOINT}/`,
  type: types.GET_ALL_ITEM_TYPES,
}

export const createAccountConfig: DispatchConfig = {
  API: `${USERS_API_ENDPOINT}/register`,
  type: types.REGISTER_ACCOUNT,
}

export const loginUserConfig: DispatchConfig = {
  API: `${USERS_API_ENDPOINT}/login`,
  type: types.LOGIN_USER,
}

export const verifyJWTConfig: DispatchConfig = {
  API: `${USERS_API_ENDPOINT}/verifyjwt`,
  type: types.VERIFY_JWT,
}

export const createEnemieConfig: DispatchConfig = {
  API: `${ENEMIES_API_ENDPOINT}/create`,
  type: types.CREATE_ENEMIE,
}

export const updateEnemieConfig: DispatchConfig = {
  API: `${ENEMIES_API_ENDPOINT}/update`,
  type: types.UPDATE_ENEMIE,
}

export const deleteEnemieConfig: DispatchConfig = {
  API: `${ENEMIES_API_ENDPOINT}/delete`,
  type: types.DELETE_ENEMIE,
}

export const getAllEnemiesConfig: DispatchConfig = {
  API: `${ENEMIES_API_ENDPOINT}/`,
  type: types.GET_ALL_ENEMIES,
}

export const createItemPrefixConfig: DispatchConfig = {
  API: `${ITEM_PREFIX_API_ENDPOINT}/create`,
  type: types.CREATE_ITEM_PREFIX,
}

export const deleteItemPrefixConfig: DispatchConfig = {
  API: `${ITEM_PREFIX_API_ENDPOINT}/delete`,
  type: types.DELETE_ITEM_PREFIX,
}

export const getAllItemPrefixConfig: DispatchConfig = {
  API: `${ITEM_PREFIX_API_ENDPOINT}/`,
  type: types.GET_ALL_ITEM_PREFIXS,
}

export const createItemSuffixConfig: DispatchConfig = {
  API: `${ITEM_SUFFIX_API_ENDPOINT}/create`,
  type: types.CREATE_ITEM_SUFFIX,
}

export const deleteItemSuffixConfig: DispatchConfig = {
  API: `${ITEM_SUFFIX_API_ENDPOINT}/delete`,
  type: types.DELETE_ITEM_SUFFIX,
}

export const getAllItemSuffixsConfig: DispatchConfig = {
  API: `${ITEM_SUFFIX_API_ENDPOINT}/`,
  type: types.GET_ALL_ITEM_SUFFIXS,
}

export const createItemRarityConfig: DispatchConfig = {
  API: `${ITEM_RARITY_API_ENDPOINT}/create`,
  type: types.CREATE_ITEM_RARITY,
}

export const deleteItemRarityConfig: DispatchConfig = {
  API: `${ITEM_RARITY_API_ENDPOINT}/delete`,
  type: types.DELETE_ITEM_RARITY,
}

export const getAllItemRarityConfig: DispatchConfig = {
  API: `${ITEM_RARITY_API_ENDPOINT}/`,
  type: types.GET_ALL_ITEM_RARITYS,
}
