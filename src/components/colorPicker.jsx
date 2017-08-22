import React from 'react'
import createReactClass from 'create-react-class'
import styled from 'styled-components'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import {
  closest
} from '../util/color'

const randomColor = () => Math.random().toString(16).substr(-6)

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

const Output = styled.div`
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
  margin: 1rem;
  font-weight: 900;
  @media screen and (max-width: 640px) {
    font-size: 3rem;
  }
`

const PickerBox = styled.div`
  height: 10rem;
  max-width: 30rem;
  margin: 0 auto;
`

const OutputView = createReactClass({
  render () {
    return (
      <Transition
        component={false}
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
          <div key='modal' className='modal__content'>
            <Output>{this.props.name}</Output>
          </div>
        }
      </Transition>
    )
  }
})

const ColorPicker = createReactClass({
  getInitialState () {
    const closestColor = closest(randomColor())
    return {
      input: closestColor[0],
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
  moveCaretToEnd (e) {
    const temp = e.target.value
    e.target.value = ''
    e.target.value = temp
  },
  render () {
    return (
      <View style={{backgroundColor: this.state.input}}>
        <PickerBox>
          <Input
            type='text'
            onChange={this.handleChange}
            value={this.state.input[0] === '#' ? this.state.input : '#' + this.state.input}
           // onFocus={this.moveCaretToEnd}
            autoFocus
          />
          <OutputView
            closed={this.state.closed}
            name={this.state.output[1]}
          />
        </PickerBox>
      </View>
    )
  }
})

export default ColorPicker
