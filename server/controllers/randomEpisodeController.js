const shows = require('../data.json')
const myCtrl = require('./myShowsController')
const myShows = myCtrl.myShows

let randomShow = 0


module.exports = {
  getRandomEpisode: (req, res) => {

    if (myShows.length === 1) {
      randomShow = 0
    } else {
      randomShow = Math.ceil(Math.random() * myShows.length - 1)
    }

    const randomEpisode = Math.ceil(Math.random() * myShows[randomShow].episodes.length - 1)

    res.status(200).send({
      show: myShows[randomShow],
      episode: myShows[randomShow].episodes[randomEpisode]
    })
  }
}
