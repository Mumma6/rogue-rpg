import { useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { IUser } from './Users'

const UsersListItem = ({
  user,
  setUsers,
  allUsers,
}: {
  user: IUser,
  setUsers: Function,
  allUsers: IUser[],
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = async (id: string) => {
    try {
      // Behövs ress?
      // Kanske sätta ett medellande beroende på vad res är? Någon trevlig liten info ruta.
      const res = await axios.delete(`http://localhost:5000/api/users/${id}`)
      console.log('deletar', id)

      setUsers(allUsers.filter((user) => user._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const validateNewUserEmail = (email: string) => {
    // Kolla så inte email finns i allUsers listan

    // Kolla så det är en valid email
  }

  const updateUser = () => {
    console.log('update', user)
    // await axios.post()

    /*

    Bara kunna ändra email och role just nu.
    */

    handleClose()
  }

  return (
    <div>
      <ListGroup>
        <ListGroup.Item key={user._id}>
          <h2 style={{ display: 'initial' }}>{user.email}</h2>
          <ButtonGroup style={{ float: 'right' }}>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteUser(user._id)}>Delete</button>

            <button
              type="button"
              className="btn btn-info"
              onClick={handleShow}>
              Edit
            </button>
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Email: {user.email}</p>
            <p>kolla hur dom andra folrmulären är. Går det använda useForms?</p>
            <p>Nej för useForms antar att man har dispatch funktioner. Men det går att återanvända logiken</p>
          </Modal.Body>
          <Modal.Footer>
            <button type="button"
              className="btn btn-warning" onClick={handleClose}>
              Close
            </button>
            <button type="button"
              className="btn btn-success" onClick={updateUser}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}


export default UsersListItem
