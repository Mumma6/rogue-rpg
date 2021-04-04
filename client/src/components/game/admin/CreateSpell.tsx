import { FormEvent, ChangeEvent, useEffect } from 'react'
import { State } from '../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { checkIsInvalid } from '../../../utils'
import {
  createSpell,
  getAllSpells,
  deleteSpell,
  updateSpell,
} from '../../../actions/adminActions'
import { useForm } from '../../../customHooks/useForm'
import ItemList from './ItemList'

const CreateSpell = ({ toggle }: any) => {
  const dispatch = useDispatch()
  const currentSpells = useSelector((state: State) => state.admin.spells)

  useEffect(() => {
    dispatch(getAllSpells())
  }, [dispatch])

  const initialState = {
    _id: '',
    name: '',
    magicSchool: 'Fire',
    manaCost: '',
    cooldown: '',
    tooltip: '',
    iconName: 'book-magic.png',
    targetType: 'SpecificEnemy',
    damageTarget: '',
    damageSelf: '',
    healingTarget: '',
    healingSelf: '',
    applyBuffTarget: '',
    applyBuffSelf: '',
    applyBuffDuration: '',
  }

  type ObjectAlias = typeof initialState

  interface Spell extends ObjectAlias {
    _id: string
  }

  const {
    formData,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
    setFormData,
    updateMode,
    setUpdateMode,
  } = useForm(initialState, createSpell, updateSpell)

  const {
    name,
    magicSchool,
    tooltip,
    iconName,
    targetType,
    manaCost,
    cooldown,
    damageTarget,
    damageSelf,
    healingTarget,
    healingSelf,
    applyBuffTarget,
    applyBuffSelf,
    applyBuffDuration,
  } = formData

  const handleUpdate = (id: string) => {
    const currentSpell = currentSpells.find((spell: Spell) => spell._id === id)
    setUpdateMode(true)
    setFormData(currentSpell)
  }

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 700 }}>
      <p className="lead">
        <i className="fas fa-magic" /> Create spell
      </p>
      <Form
        className="form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'name')}
          ></Form.Control>
        </Form.Group>

        <Form.Row>
          <Form.Group>
            <Form.Label>Magic school</Form.Label>
            <Form.Control
              as="select"
              name="magicSchool"
              value={magicSchool}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            >
              <option>Fire</option>
              <option>Cold</option>
              <option>Lightning</option>
              <option>Physical</option>
              <option>Holy</option>
              <option>Shadow</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mana Cost</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Mana Cost"
              name="manaCost"
              value={manaCost}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'manaCost')}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Cooldown</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="(Rounds)"
              name="cooldown"
              value={cooldown}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'cooldown')}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Tooltip</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tooltip"
            name="tooltip"
            value={tooltip}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'tooltip')}
          ></Form.Control>
          <Form.Text muted>Text displayed in spell tooltip.</Form.Text>
        </Form.Group>
        <Form.Row>
          <Form.Group>
            <Form.Label>
              <div style={{ height: '45px' }}>
                <img src={`/assets/icons/${iconName}`} height="45px" />
                Icon
              </div>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="book-magic.png"
              name="iconName"
              value={iconName}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'iconName')}
            ></Form.Control>
            <Form.Text muted>
              Name of the file, example 'book-magic.png'
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <div style={{ height: '45px' }}>Target Type</div>
            </Form.Label>
            <Form.Control
              as="select"
              name="targetType"
              value={targetType}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            >
              <option>SpecificEnemy</option>
              <option>SpecificParty</option>
              <option>Self</option>
              <option>AllEnemy</option>
              <option>AllParty</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Damage to Target</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Damage to target"
              name="damageTarget"
              value={damageTarget}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'damageTarget')}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Damage to Self</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Damage to Self"
              name="damageSelf"
              value={damageSelf}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'damageSelf')}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Healing to Target</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Healing to Target"
              name="healingTarget"
              value={healingTarget}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'healingTarget')}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Healing to Self</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Healing to Self"
              name="healingSelf"
              value={healingSelf}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'healingSelf')}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group>
            <Form.Label>Buff to Target</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="ID of buff to Target"
              name="applyBuffTarget"
              value={applyBuffTarget}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'applyBuffTarget')}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Buff to Self</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="ID of buff to Self"
              name="applyBuffSelf"
              value={applyBuffSelf}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'applyBuffSelf')}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Buff Duration</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Duration of the buff (Rounds)"
              name="applyBuffDuration"
              value={applyBuffDuration}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'applyBuffDuration')}
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <input type="submit" className="btn btn-success" value={updateMode ? 'Update Spell' : 'Create spell'} />
        <input
          type="button"
          className="btn btn-info"
          value="Reset"
          onClick={() => resetForm()}
        />
        <input
          type="button"
          className="btn btn-warning"
          value="Abort"
          onClick={toggle}
        />
      </Form>
      <h1 style={{ marginTop: 20 }}>Spells already created</h1>
      {currentSpells
        .sort((a: Spell, b: Spell) => a.name.localeCompare(b.name))
        .map((spell: Spell) => (
          <ItemList
            name={spell.name}
            img={`/assets/icons/${spell.iconName}`}
            id={spell._id}
            deleteHandler={() => dispatch(deleteSpell({ id: spell._id }))}
            updateHandler={() => handleUpdate(spell._id)}
          />
        ))}
    </div>
  )
}

export default CreateSpell
