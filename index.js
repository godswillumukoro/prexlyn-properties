const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to Prexlyn Properties')
})

app.listen(3500)
// const 