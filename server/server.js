const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const twitter = require('./custom_modules/twitter_mod')
const clarifai = require('./custom_modules/clarifai_mod')
const googleMapsClient = require('./custom_modules/googlemap_mod')
const databaseHelper = require('./db/db')


const app = express()
app.use(cors())
app.use(morgan('common'))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.json({
        message: "Response from Node JS"
    })
})



//client post image's url to server
app.post('/search', function (req, res) {

    const imageurl = req.body['url']
    console.log("Object from client: ")
    console.log(req.body)

    googleMapsClient.translateGeocode(req.body['city'], function (result) {

        if (result != 'undefined') {
            clarifai.getPrediction(imageurl, function (responsetags) {

                const predictions = []
                const geoObject = []

                //Store prediction data in database as well
                for (index = 0; index < 5 && index < responsetags.length; index++) {
                    predictions.push(responsetags[index])
                    geoObject.push({
                        cityname: req.body['city'],
                        geocode: result['geocode'],
                        hashtag: responsetags[index]['name']
                    })
                }
                //sending prediction and geocode back to client
                res.json({
                    hashtag: predictions,
                    geocode: result['geocode']
                })
                res.status(200)
                databaseHelper.insertGeolocation(geoObject)

            })
        } else {
            res.status(502)
            res.json({
                geocode: 'undefined'
            })
        }

    })

    //function responsetags is a callback function


})

app.post('/tweets', function (req, res) {


    databaseHelper.findGeolocaton(req.body, function (result) {
        var geocoordinates = []

        console.log("Running findGeolocation loop")
        console.log(req.body)

        // if (result.length != 0) {

        //     for (index = 0; index < result.length; index++) {
        //         geocoordinates.push(result[index]['geocode'])
        //     }
        //     console.log(geocoordinates)
        //     res.json(geocoordinates)
        // }
        // else {
            twitter.getHashtagCoordinates(req.body, async function (result) {
                var geocoordinates = []
                var geolocations = []
                await twitter.translateGeocode(result, geocoordinates)
                console.log(geocoordinates)

                res.json(geocoordinates)
                // for(index = 0; index< geocoordinates.length; index++){
                //     geolocations.push({
                    
                //     })
                // }
            })
        //}
    })

})


const port = process.env.port || 3400
app.listen(port, function () {
    console.log('Listening to port 3400')
})


