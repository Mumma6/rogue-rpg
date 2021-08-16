import { useEffect, useState } from 'react'
import { Container, Card, Button, Row, Col, ListGroup } from 'react-bootstrap'
import { State } from '../../../reducers/rootReducer'
import types from '../../../reducers/types'
import {
  getAllHeroTemplates,
  createRun,
} from '../../../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'

interface IHero {
  _id: string,
  name: string,
  attackRating: string,
  defenceRating: string,
  classType: string,
  healthPoints: string,
  manaPoints: string,
  iconName: string,
}

const Startrun = () => {
  const [selectedHero, setSelectedHero] = useState<IHero | null>()
  const dispatch = useDispatch()
  const currentHeroTemplates = useSelector(
    (state: State) => state.admin.heroTemplates
  )
  const currentUser = useSelector((state: State) => state.app.user)

  useEffect(() => {
    dispatch(getAllHeroTemplates())
  }, [dispatch])


  const createHeroCard = (hero: IHero) => (
    <Col key={hero._id} sm md lg>
      <Card border={selectedHero?._id === hero._id ? 'success' : 'primary'} style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src={`assets/icons/characters/${hero.iconName}.png`} />
        <Card.Body>
          <Card.Title>{hero.name}</Card.Title>
          <Card.Subtitle>{hero.classType}</Card.Subtitle>
          <Card.Text style={{ marginTop: 10 }}>
            add a description for each hero here
          </Card.Text>
          <h4>Stats</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>Attack rating: {hero.attackRating}</ListGroup.Item>
            <ListGroup.Item>Defence rating: {hero.defenceRating}</ListGroup.Item>
            <ListGroup.Item>Health: {hero.healthPoints}</ListGroup.Item>
            <ListGroup.Item>Mana: {hero.manaPoints}</ListGroup.Item>
          </ListGroup>
          <Button
            style={{ marginTop: 5 }}
            variant="primary"
            onClick={() => setSelectedHero(hero)}
            >Select</Button>
        </Card.Body>
      </Card>
    </Col>
  )

  return (
    <div style={{ marginTop: 20 }}>
      <button
        type="button"
        className="btn btn-info"
        onClick={() =>
          dispatch({
            type: types.INGAME_PAGE,
          })
        }
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <h1>Start new run</h1>
      <h3>Choose hero</h3>
      <Container>
        <Row>
          {currentHeroTemplates?.map((hero: IHero) => createHeroCard(hero))}
        </Row>
      </Container>
      <button
        type="button"
        className="btn btn-success"
        onClick={() =>
          dispatch(createRun({
            hero: selectedHero || {},
            user_id: currentUser?._id
          }))
        }
        disabled={!selectedHero}
      >
        Start
      </button>
    </div>
  )
}

export default Startrun
