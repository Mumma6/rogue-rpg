import axios from 'axios'

// Add to PROCESS.env ...
const HERO_TEMPLATE_API_ENDPOINT = 'http://localhost:5000/api/hero/template'
const SPELL_API_ENDPOINT = 'http://localhost:5000/api/spell'

export const createHeroTemplate = (data: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${HERO_TEMPLATE_API_ENDPOINT}/create`, data)

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
    const res = await axios.post(`${HERO_TEMPLATE_API_ENDPOINT}/`)
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
    const res = await axios.post(`${HERO_TEMPLATE_API_ENDPOINT}/delete`, data)
    console.log(res.data)
    dispatch({
      type: 'DELETE_HEROTEMPLATE',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const createSpell = (data: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${SPELL_API_ENDPOINT}/create`, data)

    dispatch({
      type: 'CREATE_SPELL',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getAllSpells = () => async (dispatch: any) => {
  try {
    const res = await axios.post(`${SPELL_API_ENDPOINT}/`)
    dispatch({
      type: 'GET_ALL_SPELLS',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteSpell = (data: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${SPELL_API_ENDPOINT}/delete`, data)
    console.log(res.data)
    dispatch({
      type: 'DELETE_SPELL',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
