const express= require('express')
const path = require('path')

app=express()

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "../index.html"))
})

const PORT=process.env.PORT || 2000

app.listen(PORT, ()=>{
`server is up and running on ${PORT}`})