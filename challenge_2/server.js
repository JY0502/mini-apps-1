const express = require('express')
const app = express()
const port = 3000
const bodyParse = require('body-parser')

app.use(express.static('client'))

//need bodyparser to use req.body from server
app.use(bodyParse.urlencoded({extended: true}))

// app.get('/sample', (req, res) => {
//   console.log('hello')
//   // res('hello')
//   res.end()
// })

app.post('/sample', (req, res) => {
  console.log('req body :', req.body);
  res.end()
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

