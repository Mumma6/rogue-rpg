import axios from 'axios'

export interface DispatchConfig {
  API: string
  type: string
}

const dispatchCurried = (
  options: DispatchConfig,
  data?: object | undefined
) => async (dispatch: Function) => {
  const { API, type } = options
  try {
    if (localStorage.getItem('rougelike_jwt')) {
      var currentJWT = localStorage.getItem('rougelike_jwt')
    }
    else {
      var currentJWT: string|null = "EMPTY"
    }
    const res = await axios.post(API, data, {
      headers: {
        'x-access-token': currentJWT
      }
    })
    if (res.data.rougelike_jwt) {
      localStorage.setItem('rougelike_jwt', res.data.rougelike_jwt)
    }
    dispatch({
      type,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export default dispatchCurried
