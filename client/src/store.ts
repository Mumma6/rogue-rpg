import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import { useDispatch } from 'react-redux'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

// export const useTypedDispatch = () => useDispatch<typeof store.dispatch>()

export default store
