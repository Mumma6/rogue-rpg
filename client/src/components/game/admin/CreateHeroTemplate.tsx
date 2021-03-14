import React, { FormEvent, ChangeEvent, useEffect } from 'react'
import { AppState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  createHeroTemplate,
  getAllHeroTemplates,
  deleteHeroTemplate,
} from '../../../actions/adminActions'
import { useForm } from '../../../customHooks/useForm'

const CreateHeroTemplate = () => {
  const dispatch = useDispatch()
  const currentHeroTemplates = useSelector(
    (state: AppState) => state.store.heroTemplates
  )

  useEffect(() => {
    console.log('useeffect')
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
    <React.Fragment>
      <h1 className="large text-primary">Create hero template</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create template
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
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="AttackRating"
            name="attackRating"
            value={attackRating}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="DefenceRating"
            name="defenceRating"
            value={defenceRating}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          />
        </div>
        <div className="form-group">
          <input
            type="classType"
            placeholder="Class type"
            name="classType"
            value={classType}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="healthPoints"
            name="healthPoints"
            value={healthPoints}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="manaPoints"
            name="manaPoints"
            value={manaPoints}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Skapa template"
          disabled={
            // find out a better way then this
            JSON.stringify({ a: formData }) ===
            JSON.stringify({ a: initialState })
          }
        />
      </form>
      <h1>Heros already created</h1>
      {currentHeroTemplates.map((hero: Hero) => (
        <div>
          <div>{hero.name}</div>
          <button
            onClick={() => dispatch(deleteHeroTemplate({ id: hero._id }))}
          >
            X
          </button>
        </div>
      ))}
    </React.Fragment>
  )
}

export default CreateHeroTemplate
