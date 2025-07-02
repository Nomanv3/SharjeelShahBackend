require('dotenv').config()
const express = require('express')
const app = express()
const reviewRoute = require('./routes/reviewRoute')

// console.log("Email:", process.env.MAIL_USER)
// console.log("Password:", process.env.MAIL_PASSWORD) 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api' , reviewRoute)

app.get('/' , (req,res)=>{
    res.send("hey")
    // console.log("the route is working fine")
})


app.listen(process.env.PORT || 3000 , (err)=>{
    if(err) return console.log(err.message)
        return console.log(`${process.env.PORT}`)
})