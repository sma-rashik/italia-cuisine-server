const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000

const chef = require('./data/chef.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// existing code ...

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id
    const selectedChef = chef.chefs.find(chef => chef.id === id)

    if (selectedChef) {
        res.send(selectedChef)
    } else {
        res.status(404).send('Chef not found')
    }
})

// existing code ...





app.listen(port, () => {
    console.log(`Italia Cuisine app listening on port ${port}`)
})


// app.get('/chef/:id', (req, res) => {
//     const id = req.params.id
//     console.log(id);
//     const everyChef = Object.values(chef).find(c => c.chefs[0].id === id);
//     res.send(everyChef)
// })
