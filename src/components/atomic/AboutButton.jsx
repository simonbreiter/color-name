import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  &:hover {
    animation: rotate .3s;   
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
      <path d='M10,0c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.522,0 10,-4.477 10,-10.001c0,-5.522 -4.478,-9.999 -10,-9.999l0,0Zm-0.157,15.832l-0.053,0c-0.815,-0.024 -1.39,-0.625 -1.366,-1.428c0.023,-0.789 0.611,-1.363 1.399,-1.363l0.048,0.002c0.837,0.024 1.406,0.618 1.382,1.445c-0.024,0.791 -0.602,1.344 -1.41,1.344l0,0Zm3.428,-6.803c-0.192,0.271 -0.613,0.611 -1.144,1.024l-0.585,0.403c-0.321,0.25 -0.515,0.487 -0.587,0.717c-0.058,0.181 -0.085,0.23 -0.09,0.6l0,0.094l-2.235,0l0.006,-0.19c0.029,-0.775 0.047,-1.233 0.369,-1.611c0.505,-0.592 1.62,-1.311 1.667,-1.341c0.16,-0.12 0.295,-0.256 0.395,-0.403c0.234,-0.324 0.337,-0.578 0.337,-0.826c0,-0.348 -0.102,-0.67 -0.305,-0.954c-0.196,-0.277 -0.568,-0.415 -1.105,-0.415c-0.534,0 -0.899,0.169 -1.117,0.517c-0.225,0.355 -0.338,0.729 -0.338,1.111l0,0.096l-2.304,0l0.005,-0.1c0.059,-1.409 0.563,-2.425 1.494,-3.018c0.587,-0.376 1.317,-0.566 2.168,-0.566c1.113,0 2.054,0.271 2.794,0.804c0.751,0.54 1.131,1.351 1.131,2.407c-0.001,0.591 -0.187,1.146 -0.556,1.651l0,0Z' style={{fill: props.color}} />
    </svg>
  </Logo>
)

export default AboutButton
