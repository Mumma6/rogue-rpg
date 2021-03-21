import React, { FormEvent, ChangeEvent, useEffect } from 'react'
import { State } from '../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
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

  const { formData, handleChange, handleSubmit } = useForm(
    initialState,
    createSpell
  )

  const { name, damage, healing, magicSchool } = formData

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 500 }}>
      <p className="lead">
        <i className="fas fa-magic" /> Create spell
      </p>
      <form
        className="form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
      >
        <div className="form-group">
          <input
            type="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Damage"
            name="damage"
            value={damage}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Healing"
            name="healing"
            value={healing}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Magic school"
            name="magicSchool"
            value={magicSchool}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <input
          type="submit"
          className="btn btn-success"
          value="Create spell"
          disabled={
            // find out a better way then this
            JSON.stringify({ a: formData }) ===
            JSON.stringify({ a: initialState })
          }
        />
        <input
          type="submit"
          className="btn btn-warning"
          value="Abort"
          onClick={toggle}
        />
      </form>
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
