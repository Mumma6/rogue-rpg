import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

import Main from './Main'

import { Provider } from 'react-redux'
import store from './store'

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (

    <Provider store={store}>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </Provider>

  )
}

export default App
