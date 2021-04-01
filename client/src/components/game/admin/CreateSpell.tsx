import { FormEvent, ChangeEvent, useEffect } from 'react'
import { State } from '../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { checkIsInvalid } from '../../../utils'
import {
  createSpell,
  getAllSpells,
  deleteSpell,
} from '../../../actions/adminActions'
import { useForm } from '../../../customHooks/useForm'

const CreateSpell = ({ toggle }: any) => {
  const dispatch = useDispatch()
  const currentSpells = useSelector((state: State) => state.admin.spells)

  useEffect(() => {
    dispatch(getAllSpells())
  }, [dispatch])

  const initialState = {
    name: '',
    magicSchool: 'Fire',
    manaCost: '',
    cooldown: '',
    tooltip: '',
    iconName: '',
    targetType: 'SpecificEnemy',
    damageTarget: '',
    damageSelf: '',
    healingTarget: '',
    healingSelf: '',
    applyBuffTarget: '',
    applyBuffSelf: '',
    applyBuffDuration: ''
  }

  type ObjectAlias = typeof initialState

  interface Spell extends ObjectAlias {
    _id: string
  }

  const { formData, handleChange, handleSubmit, errors, resetForm } = useForm(
    initialState,
    createSpell
  )

  const { name, magicSchool, tooltip, iconName, targetType, manaCost, cooldown, damageTarget, damageSelf, healingTarget, healingSelf, applyBuffTarget, applyBuffSelf, applyBuffDuration } = formData

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 500 }}>
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
        <Form.Group>
          <Form.Label>Magic school</Form.Label>
          <Form.Control
            as="select"
            name="magicSchool"
            value={magicSchool}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          //isInvalid={checkIsInvalid(errors, 'magicSchool')}
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
            placeholder="Mana Cost"
            name="manaCost"
            value={manaCost}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'manaCost')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Cooldown</Form.Label>
          <Form.Control
            type="number"
            placeholder="Cooldown of the spell (Rounds)"
            name="cooldown"
            value={cooldown}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'cooldown')}
          ></Form.Control>
        </Form.Group>
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Icon</Form.Label>
          <Form.Control
            type="text"
            placeholder="FileName of Icon. (i.e. 'FireBlast1.png')"
            name="iconName"
            value={iconName}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'iconName')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Target Type</Form.Label>
          <Form.Control
            as="select"
            name="targetType"
            value={targetType}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          //isInvalid={checkIsInvalid(errors, 'targetType')}
          >
            <option>SpecificEnemy</option>
            <option>SpecificParty</option>
            <option>Self</option>
            <option>AllEnemy</option>
            <option>AllParty</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Damage to Target</Form.Label>
          <Form.Control
            type="number"
            placeholder="Damage to target"
            name="damageTarget"
            value={damageTarget}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'damageTarget')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Damage to Self</Form.Label>
          <Form.Control
            type="number"
            placeholder="Damage to Self"
            name="damageSelf"
            value={damageSelf}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'damageSelf')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Healing to Target</Form.Label>
          <Form.Control
            type="number"
            placeholder="Healing to Target"
            name="healingTarget"
            value={healingTarget}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'healingTarget')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Healing to Self</Form.Label>
          <Form.Control
            type="number"
            placeholder="Healing to Self"
            name="healingSelf"
            value={healingSelf}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'healingSelf')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Buff to Target</Form.Label>
          <Form.Control
            type="number"
            placeholder="ID of buff to Target"
            name="applyBuffTarget"
            value={applyBuffTarget}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'applyBuffTarget')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Buff to Self</Form.Label>
          <Form.Control
            type="number"
            placeholder="ID of buff to Self"
            name="applyBuffSelf"
            value={applyBuffSelf}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'applyBuffSelf')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Buff Duration</Form.Label>
          <Form.Control
            type="number"
            placeholder="Duration of the buff (Rounds)"
            name="applyBuffDuration"
            value={applyBuffDuration}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'applyBuffDuration')}
          ></Form.Control>
        </Form.Group>
        <input type="submit" className="btn btn-success" value="Create spell" />
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
      <h1>Spells already created</h1>
      {currentSpells.map((spell: Spell) => (
        <div>
          <div> <img src={`/assets/icons/${spell.iconName}`} height='45px' /> {spell.name} <button onClick={() => dispatch(deleteSpell({ id: spell._id }))}>
            Delete
          </button></div>
          <br />
          <br />
        </div>
      ))}
    </div>
  )
}

export default CreateSpell
