import React, { FormEvent, ChangeEvent } from 'react'
import { createAccount } from '../../actions/userActions'
import { useForm } from '../../customHooks/useForm'

const CreateAccount: React.FC = () => {
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
    <React.Fragment>
      <h1 className="large text-primary">Create account</h1>
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
            placeholder="Password"
            name="password"
            minLength={6}
            value={password}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
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
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          value="Skapa konto"
          disabled={!isPasswordMatch(password, password2)}
        />
      </form>
    </React.Fragment>
  )
}

export default CreateAccount
