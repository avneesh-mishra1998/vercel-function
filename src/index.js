const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Hello From Home Api!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})