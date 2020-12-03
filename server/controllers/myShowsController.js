const shows = require('../data.json')

let myShows = []
let myShowsId = 0

module.exports = {
  getMyShows: (req, res) => {
    res.status(200).send(myShows)
  },

  addToMyShows: (req, res) => {
    const { show_id } = req.body

    const index = myShows.findIndex((element) => element.show_id === +show_id)

    if (index === -1) {
      //What to do if the show is not yet in my shows
      const show = shows.find((element) => element.show_id === +show_id)
      show.myShows_id = myShowsId

      myShows.push(show)

      myShowsId++

      show.rating = 1
    } else {
      return
    }

    res.status(200).send(myShows)
  },

  changeRating: (req, res) => {
    const { myShows_id } = req.params

    //action should be either be 'increase' or 'decrease'
    const { action } = req.query

    const index = myShows.findIndex((element) => element.myShows_id === +myShows_id)

    if (index === -1) {
      return res.status(404).send('Show is not in your shows')
    }

    if (action === 'increase') {
      myShows[index].rating++
      // myShows.push(myShows[index])
    } else if (action === 'decrease') {
      myShows[index].rating--
      // myShows.splice(index, 1)
    } else {
      return res.status(400).send(`Query ${action} is not supported. Use either 'increase' or 'decrease'.`)
    }

    res.status(200).send(myShows)
  },

  removeFromMyShows: (req, res) => {
    const { myShows_id } = req.params

    const index = myShows.findIndex((element) => element.myShows_id === +myShows_id)

    if (index === -1) {
      return res.status(404).send('Show is not in your shows')
    }

    myShows.splice(index, 1)
    res.status(200).send(myShows)
  },

  clearShows: (req, res) => {
    myShows = []
    myShowsId = 0
    res.status(200).send(myShows)
  },
  myShows: myShows
}