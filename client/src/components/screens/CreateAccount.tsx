import React, { FormEvent, ChangeEvent } from 'react'
import { createAccount } from '../../actions/userActions'
import { useForm } from '../../customHooks/useForm'
import { useDispatch } from 'react-redux'

const CreateAccount: React.FC = () => {
  const dispatch = useDispatch()
  const initialState = {
    email: '',
    password: '',
    password2: '',
  }

  const { formData, handleChange, handleSubmit } = useForm(
    initialState,
    createAccount
  )

  const { email, password, password2 } = formData

  const isPasswordMatch = (p1: string, p2: string) => p1 === p2

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 400 }}>
      <p className="lead">
        <i className="fas fa-user" /> Create account
      </p>
      <form
        className="form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
      >
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength={6}
            value={password}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            minLength={6}
            value={password2}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            className="form-control"
          />
        </div>
        <input
          type="submit"
          className="btn btn-success"
          value="Create account"
          disabled={!isPasswordMatch(password, password2)}
        />
      </form>
      <p style={{ marginTop: 40 }}>Allready have an account?</p>
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
