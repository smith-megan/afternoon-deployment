const express= require('express')
const path = require('path')

app=(express())

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/index.html"))
})

const PORT=process.env.PORT || 3000

app.listen(PORT, ()=>{console.log(`server is up and running on ${PORT}`)})