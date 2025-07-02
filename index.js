require('dotenv').config()
const express = require('express')
const cors = require('cors') // <== import cors
const app = express()
const reviewRoute = require('./routes/reviewRoute')

// Enable CORS for all origins
app.use(cors()) // <== enable CORS globally

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', reviewRoute)

app.get('/', (req, res) => {
  res.send("hey")
})

app.listen(process.env.PORT || 3000, (err) => {
  if (err) return console.log(err.message)
  return console.log(`Server running on port ${process.env.PORT || 3000}`)
})
