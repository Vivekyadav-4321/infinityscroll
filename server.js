const express = require("express")
const app = express()
var PORT = process.env.PORT || 7000

app.get("/",(req, res)=>{
res.sendFile(`${__dirname}/index.html`)
})

app.get("/index.css",(req, res)=>{
    res.sendFile(`${__dirname}/index.css`)
})

app.get("/index.js",(req, res)=>{
    res.sendFile(`${__dirname}/index.js`)
})

app.listen(PORT, ()=>{console.log(`Server is live at ${PORT}`);})