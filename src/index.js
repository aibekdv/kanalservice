import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { tableReducer } from './redux/reducers'
import { Provider } from 'react-redux'
import App from './App'
import './index.scss'

const store = createStore(
  tableReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

