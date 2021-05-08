const Clarifai = require('clarifai');
const clarifai = new Clarifai.App({
    apiKey: '236b67ecbdc04b49a308b954d7366e52'
})

function getPrediction(url, callback){

    clarifai.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    .then(model => {
      return model.predict(url);
    })
    .then(response => {
      var concepts = response['outputs'][0]['data']['concepts']
      callback(concepts)
    })
}

module.exports = {
   getPrediction
}
