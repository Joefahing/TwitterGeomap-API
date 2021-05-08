const express = require('express')
const app =  express();
const port = process.env.PORT || 4678

app.use(express.static(__dirname + "/dist/"))
app.get(/.*/, (req, res) =>{
    res.sendfile(__dirname + "/dist/index.html")
})

app.listen(port, function(){
    console.log("Listening")
})