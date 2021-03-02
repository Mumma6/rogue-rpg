import axios from 'axios'

// Add to PROCESS.env ...
const API_ENDPOINT = 'http://localhost:5000/api'

export const createAccount = (data: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/users/register`, data)

    dispatch({
      type: 'REGISTER_ACCOUNT',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = (data: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/users/login`, data)

    dispatch({
      type: 'LOGIN_USER',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
