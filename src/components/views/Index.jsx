import React from 'react'
import createReactClass from 'create-react-class'
import styled from 'styled-components'
import GitlabLogo from '../atomic/GitlabLogo'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import PanelBar from '../compounds/PanelBar'
import {
  closest,
  normalizeHex
} from '../../util/color'

const View = styled.div`
  height: 100vh;
  transition: background-color .4s ease;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`

const Input = styled.input`
  border: none;
  border-bottom: .2rem solid black;
  padding: 1rem;
  background-color: transparent;
  outline: none;
  font-size: 2rem;
  text-align: center;
  display: block;
  margin: 0 auto;
  width: 16rem;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-webkit-input-placeholder {
    color: black;  
  }
  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
  }
`

const OutputText = styled.div`
  text-align: center;
  font-size: 4rem;
  margin: 1rem;
  font-weight: 900;
  @media screen and (max-width: 640px) {
    font-size: 3rem;
  }
`

const PickerBox = styled.div`
  max-width: 30rem;
  margin: -4rem auto 0 auto;
`

const Output = createReactClass({
  render () {
    return (
      <Transition
        component={false}
        runOnMount={false}
        enter={{
          opacity: 1,
          translateY: spring(0, {stiffness: 600, damping: 20})
        }}
        leave={{
          opacity: 0,
          translateY: 10
        }}
      >
        {
          !this.props.closed &&
          <OutputText key='output'>{this.props.name}</OutputText>
        }
      </Transition>
    )
  }
})

const Index = createReactClass({
  getInitialState () {
    const closestColor = closest(this.props.color)
    return {
      input: this.props.color.toUpperCase(),
      output: closestColor,
      closed: false
    }
  },
  handleChange (e) {
    const closestColor = closest(e.target.value)
    this.setState({
      input: e.target.value.toUpperCase(),
      output: closestColor,
      closed: closestColor[0] === ''
    })
  },
  render () {
    return (
      <View style={{backgroundColor: normalizeHex(this.state.input)}}>
        <GitlabLogo />
        <PickerBox>
          <form action='/'
            method='post'
            autoComplete='off'
          >
            <Input
              id='input'
              type='text'
              onChange={this.handleChange}
              value={this.state.input[0] === '#' ? this.state.input : '#' + this.state.input}
              autoFocus
              name='color'
              ref={input => this.color = input}
            />
          </form>
          <Output
            closed={this.state.closed}
            name={this.state.output[1]}
          />
        </PickerBox>
        <PanelBar color='#000' />
      </View>
    )
  }
})

export default Index
