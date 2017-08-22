import React from 'react'
import createReactClass from 'create-react-class'

const DefaultLayout = createReactClass({
  render () {
    return (
      <html>
        <head>
          <title>Color Picker</title>
        </head>
        <body>
          <div className='app'>
            {this.props.children}
          </div>
          <script src='js/client.js' />
        </body>
      </html>
    )
  }
})

export default DefaultLayout
