import { combineReducers, Reducer } from 'redux'
import appReducer from './appReducer'
import adminReducer from './adminReducer'

type AppState = ReturnType<typeof appReducer>
type AdminState = ReturnType<typeof adminReducer>

export type State = {
  app: AppState
  admin: AdminState
}

const combinedReducer: Reducer = combineReducers({
  app: appReducer,
  admin: adminReducer,
})

export default combinedReducer
