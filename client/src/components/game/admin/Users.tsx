import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import axios from 'axios'
import { useAxios } from '../../../customHooks/useAxios'
import UserList from './UsersListItem'
import { Form } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

/*
createdAt: "2021-03-14T14:36:24.604Z"
email: "moarte6@gmail.com"
password: "$2a$10$lgFVGGCdbD21wcZW0BWZrOWLLTJfgrkKJ5JArpE1vfs8YyjqbEgaW"
role: "admin"
updatedAt: "2021-03-14T14:36:24.604Z"
__v: 0

*/

export interface IUser {
  email: string,
  password: string,
  createdAt: string,
  updatedAt: string,
  _id: string,
  role?: string,
}

const Users = ({ toggle }: any) => {
  const { response, error, loading } = useAxios({
    method: 'get',
    url: 'http://localhost:5000/api/users',
    headers: {
      accept: '*/*',
    },
  })

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    setUsers(response)
  }, [response])

  const filterUsers = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget
    if (!value) {
      setUsers(response)
    }
    if (users.length) {
      setUsers(response?.filter((user: IUser) => user.email.includes(value)))
    }
  }


  return (
    <div>
      <h1 style={{ marginTop: 20 }}>User accounts</h1>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search for user"
          onChange={(evt: ChangeEvent<HTMLInputElement>) => filterUsers(evt)}
        />
      </Form.Group>
      {loading && <Spinner animation="border" />}
      {error && <p>Error: Something went wrong</p>}
      {users?.map((user: IUser) => (
        <UserList user={user} setUsers={setUsers} allUsers={users} />
      ))}
      <input
        style={{ marginTop: 20 }}
        type="button"
        className="btn btn-warning"
        value="Abort"
        onClick={toggle}
      />
    </div>
  )
}

export default Users
