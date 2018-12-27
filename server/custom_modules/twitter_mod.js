const Twitter = require('twitter')
var async = require('async')

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyB8HXh5SQwxFA_wogoj1uwpWlVNJ2YbpLQ',
    Promise: Promise
})

const twitter = new Twitter({
    consumer_key: '3b35Rx3c8vsSyeRTxApaZQWAu',
    consumer_secret: 'EiKpxCpyJ9ogHfplMava2gJOb399iQgo6odWcWGzYMnRW39uqK',
    access_token_key: '1062026593667858440-nYNNcEjY0EFBAWyzri2jvh9Cjb2nbJ',
    access_token_secret:'MqYt1yaq1ZG1M4bx5m0LYg28P7FFW4LOCilVLOkJdzD6f'
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