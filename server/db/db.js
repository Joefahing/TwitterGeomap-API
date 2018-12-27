const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/SocialMedia',{
    useNewUrlParser: true
})

const Schema = mongoose.Schema({
    cityname : String,
    hashtag: String,
    geocode: {lat: Number, lng: Number},
    data: {type: Date, default:Date.now},

})
const Search = mongoose.model('Geolocation', Schema)


// const query = Search.find()
//     query.setOptions({lean:true})
//     query.collection(Search.collection)
//     query.where('location').equals("New York").exec(function(error, result){
//         console.log(result)
//         res.json(result)
//     })

function findGeolocaton(object,callback){

    const query = Search.find({hashtag: object['tag']})
    query.setOptions({lean:true})
    query.collection(Search.collection)
    query.exec(function(err, result){
        callback(result)
    })
  
}



//Find all geolocation in the database with a specific hashtag
function insertGeolocation(geolocationObject){

    //geolocationObject format
    // {
    //     geocode: [lat, lng],
    //     hashtag : 'dog'
    // } 
    Search.insertMany(geolocationObject, function(err, docs){
       if(!err){
        console.log("Insert Complete")
       }
    })
}


module.exports = {
    insertGeolocation,
    findGeolocaton
}
