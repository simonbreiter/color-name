import express from 'express'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import Index from './components/views/index'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('build/public'))

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(<Index />)
  res.send(html)
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
})
