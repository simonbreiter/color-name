import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { randomColor } from './util/color'

const c = document.querySelector('#input')

ReactDOM.render(
  <BrowserRouter>
    <App color={c ? c.value : randomColor()} />
  </BrowserRouter>
  , document.body.querySelector('#app'))
