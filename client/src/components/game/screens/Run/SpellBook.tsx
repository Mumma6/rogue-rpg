import { useEffect, useState } from 'react'
import { State } from '../../../../reducers/rootReducer'
import { Container, Card, Button, Row, Col, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ISpells } from '../../../../reducers/adminReducer'
import {
  getAllSpells,
} from '../../../../actions/adminActions'

interface ISpell extends ISpells {
  _id: string,
}

const SpellBook = ({ toggle, hero }: any) => {
  const [selectedSpells, setSelectedSpells] = useState<ISpell[]>(hero?.selectedSpells || [])
  const dispatch = useDispatch()
  const currentSpells = useSelector((state: State) => state.admin.spells)

  useEffect(() => {
    dispatch(getAllSpells())
  }, [dispatch])

  const handleSpellSelection = (spell: ISpell) => {
    const exists = selectedSpells.find((s) => s._id === spell._id)

    if (exists) {
      const filteredSpells = selectedSpells.filter((s) => s._id !== exists._id)
      setSelectedSpells(filteredSpells)
    } else {
      setSelectedSpells([...selectedSpells, spell])
    }
  }

  const idMatch = (id1: string, id2: string): boolean => id1 === id2

  const createSpellListItem = (spell: ISpell) => (
    <Col sm md lg>
      <Card border={selectedSpells.some((s) => idMatch(s._id, spell._id)) ? 'success' : 'primary'} style={{ width: '10rem', margin: 10 }}>
        <Card.Img variant="top" src={`assets/icons/${spell.iconName}`} />
        <Card.Body>
          <Card.Title>{spell.name}</Card.Title>
          <Card.Subtitle>{spell.magicSchool}</Card.Subtitle>
          <Card.Text style={{ marginTop: 10 }}>
            add a description for each spell here
          </Card.Text>
          <h4>Stats</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>Damage: {spell.damageTarget}</ListGroup.Item>
            <ListGroup.Item>manaCost: {spell.manaCost}</ListGroup.Item>
          </ListGroup>
          <Button
            style={{ marginTop: 5 }}
            variant="primary"
            onClick={() => handleSpellSelection(spell)}
            disabled={selectedSpells.length === 3 && !selectedSpells.some((s) => idMatch(s._id, spell._id))}
          >Select</Button>
        </Card.Body>
      </Card>
    </Col>
  )


  return (
    <div>
      Choose spells. A hero can only have 3 active spells.
      <Container>
        <Row>
          {currentSpells.map((spell: ISpell) => createSpellListItem(spell))}
        </Row>
      </Container>
      <button
          type="button"
          className="btn btn-success"
          // onClick={() => setCurrentComponent('spellBook')}
          // Kopiera hero, lägg till spells eller ersätt tidigare spells och spara i run statet
        >
          Save
        </button>
    </div>
  )
}

export default SpellBook

/*export interface ISpells {
  name: string
  magicSchool: string
  manaCost: string | number
  cooldown: string | number
  tooltip: string
  iconName: string
  targetType: string
  damageTarget: string | number
  damageSelf: string | number
  healingTarget: string | number
  healingSelf: string | number
  applyBuffTarget: string | number
  applyBuffSelf: string | number
  applyBuffDuration: string | number
}

*/