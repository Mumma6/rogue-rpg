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
    <React.Fragment>
      <h1 className="large text-primary">Logga in</h1>
      <p className="lead">
        <i className="fas fa-user" /> Logga in på ditt konto
      </p>
      <form
        className="form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
      >
        <div className="form-group">
          <input
            type="email"
            placeholder="E-postadress"
            name="email"
            value={email}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Lösenord"
            name="password"
            minLength={6}
            value={password}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Logga in" />
      </form>
      <p className="my-1">Har du redan inget konto? Registrera dig</p>
      <button
        onClick={() =>
          dispatch({
            type: 'CREATE_ACCOUNT',
          })
        }
      >
        Registrera dig
      </button>
    </React.Fragment>
  )
}

export default Login
