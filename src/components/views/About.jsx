import React from 'react'
import createReactClass from 'create-react-class'
import styled from 'styled-components'
import PanelBar from '../compounds/PanelBar'

const View = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const TextPanel = styled.div`
  padding: 2rem;
  text-align: center;
  max-width: 25rem;
  h2:first-of-type {
    margin-top: 0; 
  }
  h2 {
    margin-top: 3rem; 
  }
  a {
    color: white; 
  }
`

const About = createReactClass({
  render () {
    return (
      <View>
        <TextPanel>
          <h2>About</h2>
          <p>
            Naming things can be hard. So i made this little web app to help me find names for my hex values.
          </p>
          <h2>Credits</h2>
          <p>
            This project was inspired by <a href="http://chir.ag/projects/name-that-color/">name-that-color</a>.
            All color names used are copyrighted by <a href="http://people.csail.mit.edu/jaffer/Color/resenecolours.txt">Resene Paints Ltd</a>.
          </p>
        </TextPanel>
        <PanelBar color="#fff"/>
      </View>
    )
  }
})

export default About
