import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import ColorPicker from './components/colorPicker'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,900');
  body {
    margin: 0;
  }
`

ReactDOM.render(<ColorPicker />, document.body.querySelector('.app'))
