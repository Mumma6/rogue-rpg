import HeroTemplate from '../models/heroTemplateModel'
import {
  createFunction,
  deleteFunction,
  getAllFunction,
  updateFunction,
} from './controllerFunctions'

// @desc    Create hero template
// @route   POST /api/hero/template/create
const createHeroTemplate = createFunction(HeroTemplate)

// @desc    delete hero template
// @route   POST /api/hero/template/delete
const deleteHeroTemplate = deleteFunction(HeroTemplate)

// @desc    fetch all hero template
// @route   POST /api/hero/template/
const getAllHeroTemplates = getAllFunction(HeroTemplate)

// @desc    update hero template
// @route   POST /api/hero/template/update
const updateHeroTemplate = updateFunction(HeroTemplate)

export {
  createHeroTemplate,
  deleteHeroTemplate,
  getAllHeroTemplates,
  updateHeroTemplate,
}
