import { FormEvent, ChangeEvent, useEffect } from 'react'
import { State } from '../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import {
  createHeroTemplate,
  getAllHeroTemplates,
  deleteHeroTemplate,
} from '../../../actions/adminActions'
import { useForm } from '../../../customHooks/useForm'
import { checkIsInvalid } from '../../../utils'

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
    attackRating: '',
    defenceRating: '',
    classType: '',
    healthPoints: '',
    manaPoints: '',
  }

  type ObjectAlias = typeof initialState

  interface Hero extends ObjectAlias {
    _id: string
  }

  const { formData, handleChange, handleSubmit, errors, resetForm } = useForm(
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
    <div className="container-fluid" style={{ marginTop: 40, width: 500 }}>
      <p className="lead">
        <i className="fas fa-user" /> Create hero template
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
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Attack Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Attack Rating"
            name="attackRating"
            value={attackRating}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'attackRating')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Defence Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Defence Rating"
            name="defenceRating"
            value={defenceRating}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'defenceRating')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Class type</Form.Label>
          <Form.Control
            type="classType"
            placeholder="Class type"
            name="classType"
            value={classType}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'classType')}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Health Points</Form.Label>
          <Form.Control
            type="number"
            placeholder="Health Points"
            name="healthPoints"
            value={healthPoints}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'healthPoints')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mana Points</Form.Label>
          <Form.Control
            type="number"
            placeholder="Mana Points"
            name="manaPoints"
            value={manaPoints}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'manaPoints')}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid input.
          </Form.Control.Feedback>
        </Form.Group>
        <input
          type="submit"
          className="btn btn-success"
          value="Create template"
        />
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
      <h1>Heros already created</h1>
      {currentHeroTemplates.map((hero: Hero) => (
        <div>
          <div>{hero.name}</div>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(deleteHeroTemplate({ id: hero._id }))}
          >
            <i className="fas fa-trash-alt"></i>
          </Button>
        </div>
      ))}
    </div>
  )
}

export default CreateHeroTemplate
