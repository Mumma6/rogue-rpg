import HeroTemplate, { IHeroTemplate } from '../models/heroTemplateModel'
import { Request, Response } from 'express'

// @desc    Create hero template
// @route   POST /api/hero/template/create
const createHeroTemplate = async (req: Request, res: Response) => {
  try {
    const {
      name,
      attackRating,
      defenceRating,
      classType,
      iconName,
      healthPoints,
      manaPoints,
    } = <IHeroTemplate>req.body
    const heroTemplateExists = await HeroTemplate.findOne({ name })

    if (heroTemplateExists) {
      res.status(400)
      throw new Error('Template already exists')
    }

    const template = await HeroTemplate.create({
      name,
      attackRating,
      defenceRating,
      classType,
      iconName,
      healthPoints,
      manaPoints,
    })

    if (template) {
      res.status(201).json({
        _id: template._id,
        name,
        attackRating,
        defenceRating,
        classType,
        healthPoints,
        manaPoints,
      })
    } else {
      res.status(400)
      throw new Error('Invalid template data')
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      Error: `Request error occured: ${error}`,
    })
  }
}

// @desc    delete hero template
// @route   POST /api/hero/template/delete
const deleteHeroTemplate = async (req: Request, res: Response) => {
  const template = await HeroTemplate.findById(req.body.id)
  if (template) {
    await template.remove()
    res.json({ id: template._id })
  } else {
    res.status(404)
    throw new Error('Template not found')
  }
}

// @desc    fetch all hero template
// @route   POST /api/hero/template/
const getAllHeroTemplates = async (req: Request, res: Response) => {
  const templates = await HeroTemplate.find({}) // empty filter will return all docs

  if (templates) {
    res.json(templates)
  } else {
    res.status(404)
    throw new Error('Templates not found')
  }
}

// @desc    update hero template
// @route   POST /api/hero/template/update
const updateHeroTemplate = async (req: Request, res: Response) => {
  const {
    _id,
    name,
    attackRating,
    defenceRating,
    classType,
    iconName,
    healthPoints,
    manaPoints,
  } = <IHeroTemplate>req.body

  const template = await HeroTemplate.findById(req.body._id)

  if (template) {
    template._id = _id
    template.name = name
    template.attackRating = attackRating
    template.defenceRating = defenceRating
    template.classType = classType
    template.iconName = iconName
    template.healthPoints = healthPoints
    template.manaPoints = manaPoints

    const updatedTemplate = await template.save()

    res.json(updatedTemplate)
  } else {
    res.status(404)
    throw new Error('Template not found not found')
  }
}

export {
  createHeroTemplate,
  deleteHeroTemplate,
  getAllHeroTemplates,
  updateHeroTemplate,
}
