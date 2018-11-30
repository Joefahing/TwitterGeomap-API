//connection to location mongo db
const db = require('monk')('localhost/Twitter')
module.exports = db