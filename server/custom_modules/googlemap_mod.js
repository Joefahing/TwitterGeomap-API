const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyB8HXh5SQwxFA_wogoj1uwpWlVNJ2YbpLQ',
    Promise: Promise
})

function translateGeocode(cityName, callback){
     googleMapsClient.geocode({
        address: cityName
      }) .asPromise()
      .then((response) => {
        //console.log(response.json.results);
        geocode = response.json.results[0]['geometry']['location']
        callback({
            geocode: geocode
        })
      })
      .catch((err) => {
        callback({
            geocode: 'undefined'
        })
      });
}

module.exports = {
    translateGeocode
}