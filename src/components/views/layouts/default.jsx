import React from 'react'
import createReactClass from 'create-react-class'

const DefaultLayout = createReactClass({
  render () {
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Color Name</title>
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
