import React, { FormEvent, ChangeEvent, useEffect } from 'react'
import { State } from '../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import {
  createHeroTemplate,
  getAllHeroTemplates,
  deleteHeroTemplate,
} from '../../../actions/adminActions'
import { useForm } from '../../../customHooks/useForm'

const CreateHeroTemplate = ({ toggle }: any) => {
  const dispatch = useDispatch()
  const currentHeroTemplates = useSelector(
    (state: State) => state.admin.heroTemplates
  )

  useEffect(() => {
    dispatch(getAllHeroTemplates())
  }, [dispatch])

  const initialState = {
    name: '',
    attackRating: 0,
    defenceRating: 0,
    classType: '',
    healthPoints: 0,
    manaPoints: 0,
  }

  type ObjectAlias = typeof initialState

  interface Hero extends ObjectAlias {
    _id: string
  }

  const { formData, handleChange, handleSubmit } = useForm(
    initialState,
    createHeroTemplate
  )

  const {
    name,
    attackRating,
    defenceRating,
    classType,
    healthPoints,
    manaPoints,
  } = formData

  return (
    <div style={{ marginTop: 20 }}>
      <p className="lead">
        <i className="fas fa-user" /> Create hero template
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
            placeholder="AttackRating"
            name="attackRating"
            value={attackRating}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="DefenceRating"
            name="defenceRating"
            value={defenceRating}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="classType"
            placeholder="Class type"
            name="classType"
            value={classType}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="healthPoints"
            name="healthPoints"
            value={healthPoints}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="manaPoints"
            name="manaPoints"
            value={manaPoints}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <input
          type="submit"
          className="btn btn-success"
          value="Create template"
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
      <h1>Heros already created</h1>
      {currentHeroTemplates.map((hero: Hero) => (
        <div>
          <div>{hero.name}</div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(deleteHeroTemplate({ id: hero._id }))}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}
    </div>
  )
}

export default CreateHeroTemplate
