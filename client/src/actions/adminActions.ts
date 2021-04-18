import dispatchCurried from './actionsUtils'
import {
  createHeroConfig,
  createItemTypeConfig,
  updateHeroConfig,
  createSpellsConfig,
  deleteHeroConfig,
  deleteItemTypeConfig,
  deleteSpellConfig,
  updateSpellConfig,
  getAllHerosConfig,
  getAllItemTypesConfig,
  getAllSpellsConfig,
  createEnemieConfig,
  deleteEnemieConfig,
  updateEnemieConfig,
  getAllEnemiesConfig,
  getAllItemPrefixConfig,
  getAllItemRarityConfig,
  getAllItemSuffixsConfig,
  deleteItemPrefixConfig,
  deleteItemRarityConfig,
  deleteItemSuffixConfig,
  createAccountConfig,
  createItemPrefixConfig,
  createItemRarityConfig,
  createItemSuffixConfig,
} from './actionConfigs'

export const createHeroTemplate = (data: object) =>
  dispatchCurried(createHeroConfig, data)

export const getAllHeroTemplates = () => dispatchCurried(getAllHerosConfig)

export const deleteHeroTemplate = (data: object) =>
  dispatchCurried(deleteHeroConfig, data)

export const updateHeroTemplate = (data: object) =>
  dispatchCurried(updateHeroConfig, data)

export const createSpell = (data: object) =>
  dispatchCurried(createSpellsConfig, data)

export const getAllSpells = () => dispatchCurried(getAllSpellsConfig)

export const updateSpell = (data: object) =>
  dispatchCurried(updateSpellConfig, data)

export const deleteSpell = (data: object) =>
  dispatchCurried(deleteSpellConfig, data)

export const createItemType = (data: object) =>
  dispatchCurried(createItemTypeConfig, data)

export const deleteItemType = (data: object) =>
  dispatchCurried(deleteItemTypeConfig, data)

export const getAllItemTypes = () => dispatchCurried(getAllItemTypesConfig)

export const createEnemie = (data: object) =>
  dispatchCurried(createEnemieConfig, data)

export const getAllEnemies = () => dispatchCurried(getAllEnemiesConfig)

export const updateEnemie = (data: object) =>
  dispatchCurried(updateEnemieConfig, data)

export const deleteEnemie = (data: object) =>
  dispatchCurried(deleteEnemieConfig, data)

export const createItemPrefix = (data: object) =>
  dispatchCurried(createItemPrefixConfig, data)

export const deleteItemPrefix = (data: object) =>
  dispatchCurried(deleteItemPrefixConfig, data)

export const getAllItemPrefixs = () => dispatchCurried(getAllItemPrefixConfig)

export const createItemSuffix = (data: object) =>
  dispatchCurried(createItemSuffixConfig, data)

export const deleteItemSuffix = (data: object) =>
  dispatchCurried(deleteItemSuffixConfig, data)

export const getAllItemSuffixs = () => dispatchCurried(getAllItemSuffixsConfig)

export const createItemRarity = (data: object) =>
  dispatchCurried(createItemRarityConfig, data)

export const deleteItemRarity = (data: object) =>
  dispatchCurried(deleteItemRarityConfig, data)

export const getAllItemRaritys = () => dispatchCurried(getAllItemRarityConfig)
