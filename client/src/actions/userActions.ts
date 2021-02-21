import axios from 'axios'
import store from '../store'

// Add to PROCESS.env ...
const API_ENDPOINT = 'http://localhost:8080'

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
