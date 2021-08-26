const express = require('express')
const path = require('path')
app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, ()=>console.log(`Server started on port ${port}`))