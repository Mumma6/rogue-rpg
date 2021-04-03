import dispatchCurried from './actionsUtils'
import {
  createHeroConfig,
  createItemTypeConfig,
  createSpellsConfig,
  deleteHeroConfig,
  deleteItemTypeConfig,
  deleteSpellConfig,
  getAllHerosConfig,
  getAllItemTypesConfig,
  getAllSpellsConfig,
} from './actionConfigs'

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
