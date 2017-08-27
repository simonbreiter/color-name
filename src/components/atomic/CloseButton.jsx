import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  &:hover {
    animation: rotate .3s;   
  }
  
  path {
    fill: white 
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`

const AboutButton = props => (
  <Logo>
    <svg width='100%' height='100%' viewBox='0 0 20 20'>
      <path d='M10,0c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10l0,0Zm5.701,13.644l-2.058,2.058l-3.643,-3.644l-3.644,3.643l-2.058,-2.058l3.645,-3.643l-3.644,-3.644l2.058,-2.057l3.643,3.643l3.644,-3.644l2.058,2.058l-3.645,3.644l3.644,3.644Z' style={{fill: props.color}} />
    </svg>
  </Logo>
)

export default AboutButton
