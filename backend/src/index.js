const express = require('express')
const mongoose = require('mongoose')
const dbCfg = require('./config/database')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect(dbCfg.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`>> Listening on port ${process.env.PORT || 3000}`)
})
