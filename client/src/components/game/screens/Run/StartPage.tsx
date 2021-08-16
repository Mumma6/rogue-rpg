import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const StartPage = ({ hero }: any) => {
  return (
    <div>
      <Card style={{width: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
        <Card.Img variant="top" src={`assets/icons/characters/${hero?.iconName}.png`} />
        <Card.Body>
          <Card.Title>{hero?.name}</Card.Title>
          <Card.Subtitle>{hero?.classType}</Card.Subtitle>
          <h4>Stats</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>Attack rating: {hero?.attackRating}</ListGroup.Item>
            <ListGroup.Item>Defence rating: {hero?.defenceRating}</ListGroup.Item>
            <ListGroup.Item>Health: {hero?.healthPoints}</ListGroup.Item>
            <ListGroup.Item>Mana: {hero?.manaPoints}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default StartPage
