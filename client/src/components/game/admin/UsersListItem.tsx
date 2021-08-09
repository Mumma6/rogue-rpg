import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
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
  const [role, setRole] = useState(user.role)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteUser = async (id: string) => {
    try {
      // Behövs res?
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

  const updateUser = async () => {
    const updatedUser = {
      ...user,
      role,
    }
    await axios.post('http://localhost:5000/api/users/update', updatedUser)
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
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={role}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => setRole(evt.target.value)}
              >
                <option>user</option>
                <option>admin</option>
              </Form.Control>
            </Form.Group>
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
