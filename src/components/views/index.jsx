import React from 'react'
import createReactClass from 'create-react-class'
import DefaultLayout from './layouts/default'
import ColorPicker from '../colorPicker'

const Index = createReactClass({
  render () {
    return (
      <DefaultLayout>
        <ColorPicker />
      </DefaultLayout>
    )
  }
})

export default Index
