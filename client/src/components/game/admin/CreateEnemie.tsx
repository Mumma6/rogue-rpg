import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../reducers/rootReducer'
import {
  getAllSpells,
  createEnemie,
  getAllEnemies,
  updateEnemie,
  deleteEnemie,
} from '../../../actions/adminActions'
import { Form, Button, ListGroup } from 'react-bootstrap'
import { ISpells } from '../../../reducers/adminReducer'
import ItemList from './ItemList'

const CreateEnemie = ({ toggle }: any) => {
  interface ISpell extends ISpells {
    _id: string
  }

  interface IEnemies {
    name: string
    type: string
    rarity: string | number
    abilities: ISpell[]
    healthPoints: string | number
    manaPoints: string | number
    iconName: string
  }

  interface IEnemie extends IEnemies {
    _id: string
  }

  const initialState = {
    name: '',
    type: '',
    rarity: '',
    abilities: [],
    healthPoints: '',
    manaPoints: '',
    iconName: '',
  }

  const spells = useSelector((state: State) => state.admin.spells)
  const enemies = useSelector((state: State) => state.admin.enemies)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState<IEnemies>(initialState)
  const [updateMode, setUpdateMode] = useState<Boolean>(false)
  const [ability, setAbility] = useState<string>('')

  const {
    type,
    rarity,
    abilities,
    name,
    healthPoints,
    manaPoints,
    iconName,
  } = formData

  useEffect(() => {
    dispatch(getAllSpells())
    dispatch(getAllEnemies())
  }, [dispatch])

  useEffect(() => {
    setAbility(spells[0]?.name || '')
  }, [spells])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const addAbility = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const currentSpell = spells.find((spell: ISpell) => spell.name === ability)
    setAbility('')
    setFormData({
      ...formData,
      abilities: [...abilities, currentSpell],
    })
  }

  const filterSpells = (evt: FormEvent<HTMLFormElement>, id: string) => {
    evt.preventDefault()
    setFormData({
      ...formData,
      abilities: abilities.filter((ability: ISpell) => ability._id !== id),
    })
  }

  const handleUpdate = (id: string) => {
    const currentEnemie = enemies.find((enemie: IEnemie) => enemie._id === id)
    setUpdateMode(true)
    setFormData(currentEnemie)
  }

  const create = () => {
    dispatch(createEnemie(formData))
  }

  const update = () => {
    setUpdateMode(false)
    dispatch(updateEnemie(formData))
  }

  return (
    <div className="container-fluid">
      <div
        className="container-fluid"
        style={{ marginTop: 40, width: 500, float: 'left' }}
      >
        <p className="lead">
          <i className="fas fa-user" /> Create enemies
        </p>
        <Form
          className="form"
          onSubmit={(evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault()
            setFormData(initialState)
            updateMode ? update() : create()
          }}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="type"
              placeholder="Type"
              name="type"
              value={type}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rarity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Rarity"
              name="rarity"
              value={rarity}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Health points</Form.Label>
            <Form.Control
              type="number"
              placeholder="Health points"
              name="healthPoints"
              value={healthPoints}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mana points</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mana points"
              name="manaPoints"
              value={manaPoints}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
          </Form.Group>
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
            />
            <Form.Text muted>
              Name of the file, example 'book-magic.png'
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Abilities</Form.Label>
            <Button
              className="btn btn-success"
              size="sm"
              disabled={ability === ''}
              onClick={(evt: any) => addAbility(evt)}
              style={{ margin: 10 }}
            >
              Add ability
            </Button>
            <Form.Control
              as="select"
              name="ability"
              value={ability}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                setAbility(evt.target.value)
              }
            >
              {spells
                .filter(
                  (spell: ISpell) =>
                    !abilities.map(ability => ability.name).includes(spell.name)
                )
                .map((spell: ISpell) => (
                  <option>{spell.name}</option>
                ))}
            </Form.Control>
            {abilities.length > 0 && (
              <h4 style={{ marginTop: 10 }}>Added abilities</h4>
            )}
            <ListGroup style={{ marginBottom: 10 }}>
              {abilities.map((ability: ISpell) => (
                <ListGroup.Item
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p>{ability.name}</p>
                  <Button
                    size="sm"
                    className="btn btn-danger"
                    onClick={(evt: any) => filterSpells(evt, ability._id)}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>
          <input
            type="submit"
            className="btn btn-success"
            value={updateMode ? 'Update enemie' : 'Create enemie'}
          />
          <input
            type="button"
            className="btn btn-info"
            value="Reset"
            onClick={() => setFormData(initialState)}
          />
          <input
            type="button"
            className="btn btn-warning"
            value="Abort"
            onClick={toggle}
          />
        </Form>
      </div>
      <div
        className="container-fluid"
        style={{ marginTop: 40, width: 500, float: 'right' }}
      >
        <p className="lead">
          <h2>
            <i className="fas fa-dragon" /> Enemies already created
          </h2>
        </p>
        {enemies
          .sort((a: IEnemie, b: IEnemie) => a.name.localeCompare(b.name))
          .map((enemie: IEnemie) => (
            <ItemList
              name={enemie.name}
              img={`/assets/icons/${enemie.iconName}`}
              id={enemie._id}
              deleteHandler={() => dispatch(deleteEnemie({ id: enemie._id }))}
              updateHandler={() => handleUpdate(enemie._id)}
            />
          ))}
      </div>
    </div>
  )
}

export default CreateEnemie

/* TODOS

Snygga till koden använd useCallback osv

Snygga till UI:t

Lägg till error hantering

Lägg till update hantering
  populera all formdata
  populera abilites

*/
