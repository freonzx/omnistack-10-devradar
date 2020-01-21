const express = require('express')
const mongoose = require('mongoose')
const dbCfg = require('./config/database')
const routes = require('./routes')
const http = require('http')
const { setupWebSocket } = require('./websocket')
const cors = require('cors')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect(dbCfg.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(process.env.PORT || 3333, () => {
    console.log(`>> Listening on port ${process.env.PORT || 3333}`)
})
