import React, { FormEvent, ChangeEvent } from 'react'
import { loginUser } from '../../actions/userActions'
import { useForm } from '../../customHooks/useForm'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { checkIsInvalid } from '../../utils'
import types from '../../reducers/types'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const initialState = {
    email: '',
    password: '',
  }

  const { formData, handleChange, handleSubmit, errors, resetForm } = useForm(
    initialState,
    loginUser
  )

  const { email, password } = formData

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 400 }}>
      <p className="lead">
        <i className="fas fa-user" /> Log in to your account
      </p>
      <Form
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
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
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
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'password')}
          />
        </Form.Group>
        <input type="submit" className="btn btn-success" value="Log in" />
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
}

export default Login
