import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './containers/Main'
import registerServiceWorker from './registerServiceWorker'

import './style/index.css'
import 'bootstrap/dist/css/bootstrap.css'

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjk9cwtry5szj0160xxa68ffz'
})

const App = () =>
  <ApolloProvider client={client}>
    <Router>
      <Main />
    </Router>
  </ApolloProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
