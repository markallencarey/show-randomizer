const express = require('express')
const myCtrl = require('./controllers/myShowsController')
const showsCtrl = require('./controllers/showListController')
const randomCtrl = require('./controllers/randomEpisodeController')

const app = express()
const SERVER_PORT = 3919

app.use(express.json())

//ShowList endpoints
app.get('/api/shows', showsCtrl.getAllShows)

//MyShows endpoints
app.get('/api/myShows', myCtrl.getMyShows)
app.post('/api/myShows', myCtrl.addToMyShows)
app.put('/api/myShows/:myShows_id', myCtrl.changeRating)
app.delete('/api/myShows/:myShows_id', myCtrl.removeFromMyShows)
app.delete('/api/myShows', myCtrl.clearShows)

//RandomEpisode endpoints
app.get('/api/random', randomCtrl.getRandomEpisode)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))