import React, { useState, SyntheticEvent } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useStyles } from './Styles'
import { createAccount } from '../../actions/userActions'

interface AccountCreation {
  username: string
  password: string
  email: string
}

const AccountCreation = () => {
  const initialState: AccountCreation = {
    username: '',
    password: '',
    email: '',
  }

  const classes = useStyles()

  const [error, setError] = useState(false)
  const [accountData, setAccountData] = useState(initialState)
  const { username, password, email } = accountData

  const handleChange = (e: any) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value })
    setError(false)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (!username || !password || !email) {
      setError(true)
    }
    createAccount(accountData)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddCircleOutlineOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create account
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
            value={username}
            error={error && !username}
            // helperText={error && !username && 'Please enter a username.'} // - Not sure if i want error text or not
            onChange={(e: SyntheticEvent) => handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            value={email}
            error={error && !email}
            onChange={(e: SyntheticEvent) => handleChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            error={error && !password}
            // helperText={error && !password && 'Please enter a password.'} // - Not sure if i want error text or not
            onChange={(e: SyntheticEvent) => handleChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e: SyntheticEvent) => handleSubmit(e)}
          >
            Create
          </Button>
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={(e: SyntheticEvent) => toLogin(e)}
        >
          Back
        </Button>
      </div>
    </Container>
  )
}
