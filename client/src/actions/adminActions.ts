import axios from 'axios'

// Add to PROCESS.env ...
const API_ENDPOINT = 'http://localhost:5000/api/hero/template'

export const createHeroTemplate = (data: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/create`, data)

    dispatch({
      type: 'CREATE_HEROTEMPLATE',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getAllHeroTemplates = () => async (dispatch: any) => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/`)
    dispatch({
      type: 'GET_ALL_HEROTEMPLATE',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteHeroTemplate = (data: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${API_ENDPOINT}/delete`, data)
    console.log(res.data)
    dispatch({
      type: 'DELETE_HEROTEMPLATE',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
