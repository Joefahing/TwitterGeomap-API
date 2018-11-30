const Joi = require('joi')
const db = require('./connect')

const tweets = db.get('tweets')

function getAllTweets (){
    return tweets.find()
}

module.exports = {
    getAllTweets
}