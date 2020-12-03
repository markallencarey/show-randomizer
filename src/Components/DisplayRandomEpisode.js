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
        <div className='randoInfo'>
          <h2 className='randoShowTitle'>{this.props.randomEpisode.showTitle}</h2>
          <h3 className='randoEpiTitle'>"{this.props.randomEpisode.title}"</h3>
          <p className='randoSEpNo'>Season {this.props.randomEpisode.seasonNo}, Episode {this.props.randomEpisode.episodeNo}</p>
        </div>
        <img className='episode-img' src={this.props.randomEpisode.img} />
      </div>
    )
  }

}

export default DisplayRandomEpisode