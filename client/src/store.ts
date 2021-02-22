import { createStore, combineReducers, applyMiddleware } from 'redux'
import appReducer from './reducers/appReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  store: appReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type AppState = ReturnType<typeof rootReducer>

export default store
