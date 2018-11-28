const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res){
    res.json({
        message: "Response from Node JS"
    })
})

const port = process.env.port || 3400
app.listen(port, function(){
    console.log('Listening to port 3400')
})
