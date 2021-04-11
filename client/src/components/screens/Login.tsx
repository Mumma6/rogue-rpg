import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react'
import { loginUser, verifyJWT } from '../../actions/userActions'
import { useForm } from '../../customHooks/useForm'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { checkIsInvalid } from '../../utils'
import types from '../../reducers/types'

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [token] = useState(localStorage.getItem('rougelike_jwt'))

  const initialState = {
    email: '',
    password: '',
  }

  const { formData, handleChange, handleSubmit, errors, resetForm } = useForm(
    initialState,
    loginUser
  )

  const { email, password } = formData

  useEffect(() => {
    if (token) {
      // här måste vi kunna koppla en token till en user för att kunna logga in just den usern ifall det finns en token
      // så spara token på user objectet
      dispatch(verifyJWT({ jwt: token }))
    }
  }, [dispatch, token])

  if (!token) {
    return (
      <div className="container-fluid" style={{ marginTop: 40, width: 400 }}>
        <p className="lead">
          <i className="fas fa-user" /> Log in to your account
        </p>
        <Form
          autoComplete="on"
          className="form"
          onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
        >
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'email')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              minLength={6}
              value={password}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              isInvalid={checkIsInvalid(errors, 'password')}
            />
          </Form.Group>
          <input type="submit" className="btn btn-success" value="Login" />
          <input
            type="button"
            className="btn btn-info"
            value="Reset"
            onClick={() => resetForm()}
          />
        </Form>
        <p style={{ marginTop: 40 }}>Dont have an account?</p>
        <button
          type="submit"
          className="btn btn-info"
          onClick={() =>
            dispatch({
              type: types.CREATE_ACCOUNT,
            })
          }
        >
          Create account
        </button>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}
export default Login
