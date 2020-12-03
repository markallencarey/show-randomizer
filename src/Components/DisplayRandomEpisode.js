import React, { Component } from 'react'

class DisplayRandomEpisode extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className='displayRandomEpisode'>
        <h2>{this.props.randomEpisode.showTitle}</h2>
        <p>Season {this.props.randomEpisode.seasonNo}, Episode {this.props.randomEpisode.episodeNo}</p>
        <h3>{this.props.randomEpisode.title}</h3>
        <img className='episode-img' src={this.props.randomEpisode.img} />
      </div>
    )
  }

}

export default DisplayRandomEpisode