import React, { useState } from 'react'
import { loginUser } from '../../actions/userActions'
import { useDispatch } from 'react-redux'

interface ILogin {
  email: string
  password: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const initialState: ILogin = {
    email: '',
    password: '',
  }

  const [loginData, setLoginData] = useState<ILogin>(initialState)

  const { email, password } = loginData

  const onChange = (e: any) =>
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })

  const onSubmit = (e: any) => {
    e.preventDefault()
    dispatch(loginUser(loginData))
  }

  return (
    <React.Fragment>
      <h1 className="large text-primary">Logga in</h1>
      <p className="lead">
        <i className="fas fa-user" /> Logga in på ditt konto
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="E-postadress"
            name="email"
            value={email}
            onChange={e => onChange(e)}
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
            onChange={e => onChange(e)}
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
