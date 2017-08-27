import React from 'react'
import createReactClass from 'create-react-class'
import Index from './views/Index'
import About from './views/About'
import styled, {
  injectGlobal
} from 'styled-components'
import {
  Route,
  Switch
} from 'react-router-dom'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,900');
  
  html {
    box-sizing: border-box; 
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  html,
  body {
    height: 100%; 
  }
  
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    line-height: 1.4;
  }
`

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const App = createReactClass({
  render () {
    return (
      <Box>
        <Switch>
          <Route exact path="/" render={props => (
            <Index color={this.props.color} />
          )} />
          <Route path="/about" component={About} />
        </Switch>
      </Box>
    )
  }
})

export default App
