import { createStore, combineReducers } from 'redux'
import appReducer from './reducers/appReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  app: appReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
