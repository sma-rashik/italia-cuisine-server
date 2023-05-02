const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000

const chef = require('./data/chef.json')

// app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/chef', (req, res) => {
    res.send(chef)
})


app.listen(port, () => {
    console.log(`Italia Cuisine app listening on port ${port}`)
})