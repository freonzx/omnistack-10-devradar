const express = require('express')
const mongoose = require('mongoose')
const dbCfg = require('./config/database')
const routes = require('./routes')

const app = express()

mongoose.connect(dbCfg.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)
