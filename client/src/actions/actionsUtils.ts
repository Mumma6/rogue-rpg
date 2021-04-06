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
  console.log(API)
  try {
    const res = await axios.post(API, data)
    dispatch({
      type,
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export default dispatchCurried
