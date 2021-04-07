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
    const res = await axios.post(API, data, {
      headers: {
        'x-access-token': localStorage.getItem('rougelike_jwt') || 'EMPTY',
      },
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
