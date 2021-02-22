import axios from 'axios'
import store from '../store'

// Add to PROCESS.env ...
const API_ENDPOINT = 'http://localhost:8080/api'

export const createAccount = async (data: any) => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/users`, data)

    store.dispatch({
      type: 'REGISTER_ACCOUNT',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = async (data: any) => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/users/login`, data)
    store.dispatch({
      type: 'LOGIN_USER',
      payload: res.data.message,
    })
  } catch (error) {
    console.log(error)
  }
}
