const shows = require('../data.json')

module.exports = {
  getAllShows: (req, res) => {
    res.status(200).send(shows)
  }
}