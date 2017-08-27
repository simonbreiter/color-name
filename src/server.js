import express from 'express'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import App from './components/App'
import bodyParser from 'body-parser'
import html from './util/html'
import { randomColor } from './util/color'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('build/public'))


const createDocument = (color, req) => {
  const context = {}
  const sheet = new ServerStyleSheet()
  const app = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App color={color} />
      </StaticRouter>
    )
  )
  const css = sheet.getStyleTags()
  const document = html(css, app)
  return document
}

app.get('*', (req, res) => {
  const color = randomColor()
  res.send(createDocument(color, req))
})

app.post('/', (req, res) => {
  const color = req.body.color
  res.send(createDocument(color, req))
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
})
