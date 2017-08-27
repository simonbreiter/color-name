import React from 'react'
import createReactClass from 'create-react-class'
import styled from 'styled-components'
import TwitterLogo from '../atomic/TwitterLogo'
import AboutButton from '../atomic/AboutButton'
import CloseButton from '../atomic/CloseButton'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  margin-left: auto;
  a {
    display: block;
  }
`

const activeStyle = { display: 'none' }

const Panel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 1rem;
`

const PanelText = styled.p`
  text-align: center;
  font-size: 0.75rem;
  @media screen and (max-width: 640px) {
    max-width: 8rem;
  }
  
  a {
    color: black;
  }
`

const PanelBar = createReactClass({
  render() {
    return (
      <Panel>
        <TwitterLogo iconColor={this.props.color} />
        <PanelText style={{color: this.props.color}}>
          Another thing from <a style={{color: this.props.color}}
                                href="https://simonbreiter.com"
                                target="_blank">Simon Breiter</a>.
        </PanelText>
        <Nav>
          <NavLink exact to="/" activeStyle={activeStyle}>
            <CloseButton color={this.props.color} />
          </NavLink>
          <NavLink to="/about" activeStyle={activeStyle}>
            <AboutButton color={this.props.color} />
          </NavLink>
        </Nav>
      </Panel>
    )
  }
})

export default PanelBar