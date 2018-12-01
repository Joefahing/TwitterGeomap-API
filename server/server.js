const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const database = require('./db/tweets')
const clarifai = require('./custom_modules/clarifai_mod')

const app = express()
app.use(cors())
app.use(morgan('common'))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.json({
        message: "Response from Node JS"
    })
})

app.get('/search', function(req,res){
    database.getAllTweets().then(function(tweets){
        res.json(tweets)
    })
})

//client post image's url to server
app.post('/search', function(req, res){
    const imageurl = req.body['url']

    //function responsetags is a callback function
    clarifai.getPrediction(imageurl, function(responsetags){
        const predictions = []

        for(index=0; index < 5 && index < responsetags.length; index++ ){
            predictions.push(responsetags[index])
        }
        //sending prediction back to client
        res.json(predictions)
        res.status(200)
    })

})

const port = process.env.port || 3400
app.listen(port, function(){
    console.log('Listening to port 3400')
})
