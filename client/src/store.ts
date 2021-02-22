import { createStore, combineReducers } from 'redux'
import appReducer from './reducers/appReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  store: appReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export type AppState = ReturnType<typeof rootReducer>

export default store
