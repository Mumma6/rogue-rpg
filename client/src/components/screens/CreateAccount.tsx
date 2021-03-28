import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react'
import { createAccount } from '../../actions/userActions'
import Alert from 'react-bootstrap/Alert'
import { useForm } from '../../customHooks/useForm'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { checkIsInvalid } from '../../utils'

const CreateAccount: React.FC = () => {
  const dispatch = useDispatch()
  const [errorMsg, setErrorMsg] = useState<boolean>(false)

  const initialState = {
    email: '',
    password: '',
    password2: '',
  }

  const { formData, handleChange, handleSubmit, errors, resetForm } = useForm(
    initialState,
    createAccount
  )

  const { email, password, password2 } = formData

  const isPasswordMatch = (p1: string, p2: string) => p1 === p2

  useEffect(() => {
    if (
      !isPasswordMatch(password, password2) &&
      password !== '' &&
      password2 !== ''
    ) {
      setErrorMsg(true)
    } else {
      setErrorMsg(false)
    }
  }, [password, password2])

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 400 }}>
      <p className="lead">
        <i className="fas fa-user" /> Create account
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
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            minLength={6}
            value={password2}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'password2')}
          />
        </Form.Group>
        <input
          type="submit"
          className="btn btn-success"
          value="Create account"
        />
        <input
          type="button"
          className="btn btn-info"
          value="Reset"
          onClick={() => resetForm()}
        />
      </Form>
      {errorMsg && (
        <Alert style={{ marginTop: 10 }} show={errorMsg} variant="warning">
          Make sure the passwords match
        </Alert>
      )}
      <p style={{ marginTop: 40 }}>Already have an account?</p>
      <button
        type="submit"
        className="btn btn-info"
        onClick={() =>
          dispatch({
            type: 'DISPLAY_LOGIN',
          })
        }
      >
        Log in
      </button>
    </div>
  )
}

export default CreateAccount
