import React, { useState } from 'react'
import { createAccount } from '../../actions/userActions'
import { useDispatch } from 'react-redux'

interface ICreateAccount {
  email: string
  password: string
  password2: string
}

const CreateAccount: React.FC = () => {
  const dispatch = useDispatch()
  const initialState: ICreateAccount = {
    email: '',
    password: '',
    password2: '',
  }

  const [registerData, setRegisterData] = useState<ICreateAccount>(initialState)

  const { email, password, password2 } = registerData

  const onChange = (e: any) =>
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    })

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (password === password2) {
      console.log('reggar med', registerData)
      dispatch(createAccount({ email, password }))
    }
  }

  return (
    <React.Fragment>
      <h1 className="large text-primary">Create account</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create account
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
            placeholder="Password"
            name="password"
            minLength={6}
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            minLength={6}
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Logga in" />
      </form>
    </React.Fragment>
  )
}

export default CreateAccount
