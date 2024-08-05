const express = require("express")
const app = express()
const cors = require('cors')
const PORT= 3000

const userData = [
{
    name: "Raghvendra",
    course: "B.Tech CSE",
    sec: "B",
    batch: "2022-2026",
},
{
    name: "Amay",
    course: "B.Tech CSE",
    sec: "B",
    batch: "2022-2026",
},
{
    name: "Baqir Rizvi",
    course: "B.Tech CSE",
    sec: "B",{}
    batch: "2022-2026",
},
]

app.get("/",(req,res)=>{
    res.json(userData)
})


app.listen(PORT,(err)=>{
    if(!err) console.log("Server is running at ",PORT)
})

