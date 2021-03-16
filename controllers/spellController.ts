import SpellModel, { ISpellModel } from '../models/spellModel'
import { Request, Response } from 'express'

// @desc    Create spell
// @route   POST /api/spell/create
const createSpell = async (req: Request, res: Response) => {
  try {
    const { name, magicSchool, damage, healing } = <ISpellModel>req.body
    const spellExists = await SpellModel.findOne({ name })

    if (spellExists) {
      res.status(400)
      throw new Error('Spell already exists')
    }

    const spell = await SpellModel.create({
      name,
      magicSchool,
      damage,
      healing,
    })

    if (spell) {
      res.status(201).json({
        _id: spell._id,
        name,
        magicSchool,
        damage,
        healing,
      })
    } else {
      res.status(400)
      throw new Error('Invalid spell data')
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      Error: `Request error occured: ${error}`,
    })
  }
}

// @desc    delete spell
// @route   POST /api/spell/delete
const deleteSpell = async (req: Request, res: Response) => {
  const spell = await SpellModel.findById(req.body.id)
  if (spell) {
    await spell.remove()
    res.json({ id: spell._id })
  } else {
    res.status(404)
    throw new Error('Spell not found')
  }
}

// @desc    fetch all spells
// @route   POST /api/spell/
const getAllSpells = async (req: Request, res: Response) => {
  const spells = await SpellModel.find({}) // empty filter will return all docs

  if (spells) {
    res.json(spells)
  } else {
    res.status(404)
    throw new Error('Spells not found')
  }
}

export { createSpell, deleteSpell, getAllSpells }
