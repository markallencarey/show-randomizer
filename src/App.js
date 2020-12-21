import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/Header'
import ShowList from './Components/ShowList'
import MyShows from './Components/MyShows'
import GetRandomEpisode from './Components/GetRandomEpisode'

class App extends Component {
  constructor() {
    super()

    this.state = {
      shows: [],
      myShows: [],
      randomEpisode: {
        title: 'Show Title',
        name: 'Episode Title',
        season: 0,
        number: 0,
        image: 'https://image1.masterfile.com/getImage/ODQ2LTAyNzkyNTA4ZW4uMDAwMDAwMDA=ACdJ8c/846-02792508en_Masterfile.jpg',
        summary: '',
        airdate: '',
        runtime: '',
      },
    }
    this.addToMyShows = this.addToMyShows.bind(this)
    this.changeRating = this.changeRating.bind(this)
    this.removeFromMyShows = this.removeFromMyShows.bind(this)
    this.clearShows = this.clearShows.bind(this)
    this.getRandomEpisode = this.getRandomEpisode.bind(this)
  }

  componentDidMount() {
    axios.get('/api/shows').then((res) => {
      this.setState({
        shows: res.data,
      })
    })
  }

  addToMyShows(id) {
    const body = { show_id: id }
    // console.log(body)
    axios.post('/api/myShows', body).then((res) => {
      this.setState({
        myShows: res.data
      })
    })
  }

  changeRating(id, action) {
    axios.put(`/api/myShows/${id}?action=${action}`).then((res) => {
      this.setState({
        myShows: res.data
      })
    })
  }

  removeFromMyShows(id) {
    axios.delete(`/api/myShows/${id}`).then((res) => {
      this.setState({
        myShows: res.data
      })
    })
  }

  clearShows() {
    axios.delete('/api/myShows').then((res) => {
      this.setState({
        myShows: res.data
      })
    })
  }

  getRandomEpisode() {
    axios.get('api/random').then((res) => {
      const newRandomEpisode = {
        title: res.data.show.title,
        name: res.data.episode.name,
        season: res.data.episode.season,
        number: res.data.episode.number,
        image: res.data.episode.image.original,
        summary: res.data.episode.summary,
        airdate: res.data.episode.airdate,
        runtime: res.data.episode.airtime,
      }

      this.setState({
        randomEpisode: newRandomEpisode
      })
    })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <div className='body'>
          <ShowList
            shows={this.state.shows}
            addToMyShows={this.addToMyShows}
          />
          <GetRandomEpisode
            randomEpisode={this.state.randomEpisode}
            getRandomEpisode={this.getRandomEpisode}
          />
          <MyShows
            myShows={this.state.myShows}
            changeRating={this.changeRating}
            removeFromMyShows={this.removeFromMyShows}
            clearShows={this.clearShows}
          />
        </div>
      </div>
    );
  }
}

export default App;
