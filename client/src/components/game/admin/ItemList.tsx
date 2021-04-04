import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Image from 'react-bootstrap/Image'
interface IItems {
  name: string
  img: string
  id: string
  deleteHandler: Function
  updateHandler: Function
}

const ItemList = ({ name, img, id, deleteHandler, updateHandler }: IItems) => {
  return (
    <div
      className="bg-primary"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
      }}
    >
      <Image src={img} rounded style={{ height: 50, width: 50 }} />
      <h3>{name}</h3>
      <ButtonGroup>
        <Button
          type="button"
          className="btn btn-info"
          onClick={() => updateHandler({ id })}
        >
          <i className="fas fa-edit" />
        </Button>
        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteHandler({ id })}
        >
          <i className="fas fa-trash-alt" />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default ItemList
