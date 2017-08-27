import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: auto;
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

const TwitterLogo = props => (
  <Logo>
    <a href="https://twitter.com/intent/tweet?hashtags=colorname&url=https%3A%2F%2Fcolorname.io&via=simonbreiter">
      <svg width="100%" height="100%" viewBox="0 0 20 20">
        <path d="M10,0c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10l0,0Zm4.068,8.192c0.004,0.085 0.005,0.171 0.005,0.254c0,2.604 -1.98,5.605 -5.603,5.605c-1.113,0 -2.148,-0.325 -3.019,-0.885c0.153,0.018 0.31,0.026 0.47,0.026c0.923,0 1.772,-0.314 2.446,-0.843c-0.862,-0.017 -1.589,-0.585 -1.84,-1.367c0.12,0.022 0.243,0.035 0.37,0.035c0.179,0 0.354,-0.024 0.519,-0.069c-0.901,-0.181 -1.581,-0.977 -1.581,-1.931l0,-0.024c0.266,0.147 0.57,0.236 0.893,0.247c-0.529,-0.355 -0.876,-0.957 -0.876,-1.641c0,-0.36 0.097,-0.7 0.267,-0.991c0.972,1.192 2.422,1.975 4.059,2.06c-0.034,-0.145 -0.051,-0.295 -0.051,-0.45c0,-1.087 0.881,-1.97 1.97,-1.97c0.565,0 1.078,0.24 1.437,0.623c0.449,-0.09 0.87,-0.252 1.25,-0.478c-0.147,0.459 -0.458,0.846 -0.865,1.09c0.399,-0.049 0.778,-0.154 1.131,-0.311c-0.264,0.395 -0.598,0.743 -0.982,1.02l0,0Z" style={{fill: props.iconColor}} />
      </svg>
    </a>
  </Logo>
)

export default TwitterLogo