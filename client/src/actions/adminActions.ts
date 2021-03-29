import axios from 'axios'

// Add to PROCESS.env ...
const HERO_TEMPLATE_API_ENDPOINT = 'http://localhost:5000/API/hero/template'
const SPELL_API_ENDPOINT = 'http://localhost:5000/API/spell'
const ITEM_TYPE_API_ENDPOINT = 'http://localhost:5000/api/items/type'

interface DispatchConfig {
  API: string
  type: string // gör ett eget interface för alla types i reducers
}

// gör en actions config fil med alla dessa
const createHeroConfig: DispatchConfig = {
  API: `${HERO_TEMPLATE_API_ENDPOINT}/create`,
  type: 'CREATE_HEROTEMPLATE',
}

const getAllHerosConfig: DispatchConfig = {
  API: `${HERO_TEMPLATE_API_ENDPOINT}/`,
  type: 'GET_ALL_HEROTEMPLATE',
}

const deleteHeroConfig: DispatchConfig = {
  API: `${HERO_TEMPLATE_API_ENDPOINT}/delete`,
  type: 'DELETE_HEROTEMPLATE',
}

const getAllSpellsConfig: DispatchConfig = {
  API: `${SPELL_API_ENDPOINT}/`,
  type: 'GET_ALL_SPELLS',
}

const createSpellsConfig: DispatchConfig = {
  API: `${SPELL_API_ENDPOINT}/create`,
  type: 'CREATE_SPELL',
}

const deleteSpellConfig: DispatchConfig = {
  API: `${SPELL_API_ENDPOINT}/delete`,
  type: 'DELETE_SPELL',
}

const createItemTypeConfig: DispatchConfig = {
  API: `${ITEM_TYPE_API_ENDPOINT}/create`,
  type: 'CREATE_ITEM_TYPE',
}

const deleteItemTypeConfig: DispatchConfig = {
  API: `${ITEM_TYPE_API_ENDPOINT}/delete`,
  type: 'DELETE_ITEM_TYPE',
}

const getAllItemTypesConfig: DispatchConfig = {
  API: `${ITEM_TYPE_API_ENDPOINT}/`,
  type: 'GET_ALL_ITEM_TYPES',
}

const dispatchCurried = (
  options: DispatchConfig,
  data?: object | undefined
) => async (dispatch: Function) => {
  const { API, type } = options
  try {
    const res = await axios.post(API, data)
    console.log(API, type)
    dispatch({
      type,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const createHeroTemplate = (data: object) =>
  dispatchCurried(createHeroConfig, data)

export const getAllHeroTemplates = () => dispatchCurried(getAllHerosConfig)

export const deleteHeroTemplate = (data: object) =>
  dispatchCurried(deleteHeroConfig, data)

export const createSpell = (data: object) =>
  dispatchCurried(createSpellsConfig, data)

export const getAllSpells = () => dispatchCurried(getAllSpellsConfig)

export const deleteSpell = (data: object) =>
  dispatchCurried(deleteSpellConfig, data)

export const createItemType = (data: object) =>
  dispatchCurried(createItemTypeConfig, data)

export const deleteItemType = (data: object) =>
  dispatchCurried(deleteItemTypeConfig, data)

export const getAllItemTypes = () => dispatchCurried(getAllItemTypesConfig)
