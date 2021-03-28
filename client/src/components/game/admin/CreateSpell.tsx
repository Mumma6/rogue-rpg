import React, { FormEvent, ChangeEvent, useEffect } from 'react'
import { State } from '../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
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
    damage: '',
    healing: '',
    magicSchool: '',
  }

  type ObjectAlias = typeof initialState

  interface Spell extends ObjectAlias {
    _id: string
  }

  const { formData, handleChange, handleSubmit, errors, resetForm } = useForm(
    initialState,
    createSpell
  )

  const { name, damage, healing, magicSchool } = formData

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
          <Form.Label>Damage</Form.Label>
          <Form.Control
            type="number"
            placeholder="Damage"
            name="damage"
            value={damage}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'damage')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Healing</Form.Label>
          <Form.Control
            type="number"
            placeholder="Healing"
            name="healing"
            value={healing}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'healing')}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Magic school</Form.Label>
          <Form.Control
            type="name"
            placeholder="Magic school"
            name="magicSchool"
            value={magicSchool}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'magicSchool')}
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
          <div>{spell.name}</div>
          <button onClick={() => dispatch(deleteSpell({ id: spell._id }))}>
            X
          </button>
        </div>
      ))}
    </div>
  )
}

export default CreateSpell
