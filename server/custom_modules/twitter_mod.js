const Twitter = require('twitter')
var async = require('async')

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCLRCFj43n16cxJcYkxAplEwKdAU_7cp6U',
    Promise: Promise
})

const twitter = new Twitter({
    consumer_key: 'PFFSatNniGAiZzQF9gqULTf9s',
    consumer_secret: 'rRmFua4ONyXIksoTV7mvloyJC8oreNBzhavw7dD6hxdZu4w3xs',
    access_token_key: '1062026593667858440-cnuhVgXOuWiplTtof04UZaFtdyLHhi',
    access_token_secret:'wULWmIHes0E9VcAo8G5HYAOiYUnxrlhR2xQMWgT1s5FVl'
})

function getHashtagCoordinates(options,callback){

    var locationName = []

    const queryParam = {
        q: "%23"+options['tag'],
        geocode: options['latitude'] + "," + options['longitude'] + ",300km",
        count: '100',
    }

      twitter.get('search/tweets', queryParam)
        .then(function (tweet) {
           
            const tweetsArray = tweet['statuses']
            
            for(let index= 0 ; index<tweetsArray.length; index++){
                const userLocation = tweetsArray[index]['user']['location']
                if(userLocation != ""){
                    locationName.push(userLocation)
                }
            }
          
            callback(locationName)
        })
        .catch(function (error) {
            throw error
        })
}



translateGeocode = async(cityName, geoCode) => {

    for(let i = 0; i<cityName.length; i++){
      await googleMapsClient.geocode({
          address: cityName[i]
        }) .asPromise()
        .then((response) => {
          //console.log(response.json.results);
          geoCode.push(response.json.results[0]['geometry']['location'])
        })
        .catch((err) => {
          console.log(err);
        });
    }
}


module.exports = {
    getHashtagCoordinates,
    translateGeocode
}