import { DispatchConfig } from './actionsUtils'
import types from '../reducers/types'
// Add to PROCESS.env ...
const HERO_TEMPLATE_API_ENDPOINT = 'http://localhost:5000/api/hero/template'
const SPELL_API_ENDPOINT = 'http://localhost:5000/api/spell'
const ITEM_TYPE_API_ENDPOINT = 'http://localhost:5000/api/items/type'
const USERS_API_ENDPOINT = 'http://localhost:5000/api/users'

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
