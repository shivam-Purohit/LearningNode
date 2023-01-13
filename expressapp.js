const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About this World!')
})
app.get('/shivam', (req, res) => {
  res.send('About this shivam word!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
