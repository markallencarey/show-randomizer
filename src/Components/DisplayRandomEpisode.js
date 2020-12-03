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
          <h3 className='randoEpiTitle'>"{this.props.randomEpisode.name}"</h3>
          <p className='randoSEpNo'>Season {this.props.randomEpisode.season}, Episode {this.props.randomEpisode.number}</p>
        </div>
        <img className='episode-img' src={this.props.randomEpisode.image.original} />
      </div>
    )
  }

}

export default DisplayRandomEpisode