import React, { FormEvent, ChangeEvent } from 'react'
import { loginUser } from '../../actions/userActions'
import { useForm } from '../../customHooks/useForm'
import { useDispatch } from 'react-redux'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const initialState = {
    email: '',
    password: '',
  }

  const { formData, handleChange, handleSubmit } = useForm(
    initialState,
    loginUser
  )

  const { email, password } = formData

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 400 }}>
      <p className="lead">
        <i className="fas fa-user" /> Log in to your account
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
        <input type="submit" className="btn btn-success" value="Log in" />
      </form>
      <p style={{ marginTop: 40 }}>Dont have an account?</p>
      <button
        type="submit"
        className="btn btn-info"
        onClick={() =>
          dispatch({
            type: 'CREATE_ACCOUNT',
          })
        }
      >
        Create account
      </button>
    </div>
  )
}

export default Login
