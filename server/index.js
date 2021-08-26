const express= require('express')
const path = require('path')

const app=(express())

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/index.html"))
})

app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.css'))
})

const PORT=process.env.PORT || 3000

app.listen(PORT, ()=>{console.log(`server is up and running on ${PORT}`)})