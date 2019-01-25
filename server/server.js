const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const massive = require('massive')

const cr = require('./controller')
const {CONNECTION_STRING, PORT} = process.env

const app = express()
app.use(bodyParser.json())

massive(CONNECTION_STRING)
    .then((db) => app.set('db', db))
    .catch((err) => {})

app.get(`/api/blogs`, cr.getAllBlogs)
app.get(`/api/getThings`, cr.getThingsSearch)


const port = PORT || 3000
app.listen(port, ()=>console.log('listening on port', port))