import express from 'express'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import App from './components/App'
import bodyParser from 'body-parser'
import html from './util/html'
import { randomColor } from './util/color'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import helmet from 'helmet'

const app = express()
const port = process.env.PORT || 3000

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

app.use(helmet())

app.use(function (req, res, next) {
  res.header('X-Page-Speed', 'ludicrous')
  next()
})

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-Type', 'text/javascript')
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('build/public'))

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
