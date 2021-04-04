import SpellModel, { ISpellModel } from '../models/spellModel'
import { Request, Response } from 'express'

// @desc    Create spell
// @route   POST /api/spell/create
const createSpell = async (req: Request, res: Response) => {
  try {
    const {
      name,
      magicSchool,
      manaCost,
      cooldown,
      tooltip,
      iconName,
      targetType,
      damageTarget,
      damageSelf,
      healingTarget,
      healingSelf,
      applyBuffTarget,
      applyBuffSelf,
      applyBuffDuration,
    } = <ISpellModel>req.body
    const spellExists = await SpellModel.findOne({ name })

    if (spellExists) {
      res.status(400)
      throw new Error('Spell already exists')
    }

    const spell = await SpellModel.create({
      name,
      magicSchool,
      manaCost,
      cooldown,
      tooltip,
      iconName,
      targetType,
      damageTarget,
      damageSelf,
      healingTarget,
      healingSelf,
      applyBuffTarget,
      applyBuffSelf,
      applyBuffDuration,
    })

    if (spell) {
      res.status(201).json({
        _id: spell._id,
        name,
        magicSchool,
        manaCost,
        cooldown,
        tooltip,
        iconName,
        targetType,
        damageTarget,
        damageSelf,
        healingTarget,
        healingSelf,
        applyBuffTarget,
        applyBuffSelf,
        applyBuffDuration,
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

// @desc    update spell
// @route   POST /api/spell/update
const updateSpell = async (req: Request, res: Response) => {
  const {
    _id,
    name,
    magicSchool,
    manaCost,
    cooldown,
    tooltip,
    iconName,
    targetType,
    damageTarget,
    damageSelf,
    healingTarget,
    healingSelf,
    applyBuffTarget,
    applyBuffSelf,
    applyBuffDuration,
  } = <ISpellModel>req.body

  const spell = await SpellModel.findById(req.body._id)

  console.log(spell, 'spell från body')

  if (spell) {
    spell._id = _id
    spell.name = name
    spell.magicSchool = magicSchool
    spell.manaCost = manaCost
    spell.cooldown = cooldown
    spell.tooltip = tooltip
    spell.iconName = iconName
    spell.targetType = targetType
    spell.damageTarget = damageTarget
    spell.damageSelf = damageSelf
    spell.healingTarget = healingTarget
    spell.healingSelf = healingSelf
    spell.applyBuffTarget = applyBuffTarget
    spell.applyBuffSelf = applyBuffSelf
    spell.applyBuffDuration = applyBuffDuration

    const updatedSpell = await spell.save()

    console.log(updateSpell, 'updaterad')
    res.json(updatedSpell)
  } else {
    res.status(404)
    throw new Error('Spell not found')
  }
}

export { createSpell, deleteSpell, getAllSpells, updateSpell }
