const express= require('express')
const path = require('path')

const app=(express())

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/index.html"))
})

// app.get('/css', (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/index.css"))
// })

app.use('/css', express.static(path.join(__dirname, 'client/index.css')))
app.use('/js', express.static(path.join(__dirname, "client/index.js")))

const PORT=process.env.PORT || 2200

app.listen(PORT, ()=>{console.log(`server is up and running on ${PORT}`)})