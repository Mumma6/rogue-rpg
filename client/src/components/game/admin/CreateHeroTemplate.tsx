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
    iconName: 'hero_artificer.png',
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
    iconName,
    healthPoints,
    manaPoints,
  } = formData

  return (
    <div className="container-fluid">
      <div className="container-fluid"  style={{ marginTop: 40, width: 500, float:'left' }}>
      <p className="lead">
          <h2><i className="fas fa-user-plus" /> Create New Hero Template</h2>
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
        <Form.Row>
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
        </Form.Row>
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
        <Form.Text muted>
          Name class archetype, for example 'Artificer'
        </Form.Text>
        <Form.Group>
          <Form.Label><div style={{ height: "45px" }}><img src={`/assets/icons/characters/${iconName}`} height='45px' />Icon</div></Form.Label>
          <Form.Control
            type="text"
            placeholder="hero_artificer.png"
            name="iconName"
            value={iconName}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'iconName')}
          ></Form.Control>
          <Form.Text muted>
            Name of the file, for example 'hero_arficier.png'
          </Form.Text>
        </Form.Group>
        <Form.Row>
          <Form.Group>
            <Form.Label>Health Points</Form.Label>
            <Form.Control
              type="number"
              min="0"
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
              min="0"
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
        </Form.Row>
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
      </div>
      <div className="container-fluid"  style={{ marginTop: 40, width: 500, float:'right' }}>
      <p className="lead">
          <h2><i className="fas fa-user-edit" /> Existing Hero Templates</h2>
      </p>
      {
        currentHeroTemplates.map((hero: Hero) => (
          <div>
            <div><img src={`/assets/icons/characters/${hero.iconName}`} height='45px' /> {hero.name}
              <Button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(deleteHeroTemplate({ id: hero._id }))}
              >
                <i className="fas fa-trash-alt"></i>
              </Button>
            </div>
          </div>
        ))
      }
      </div>
    </div >
  )
}

export default CreateHeroTemplate
