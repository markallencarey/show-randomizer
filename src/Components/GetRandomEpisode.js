import React, { Component } from 'react'
import DisplayRandomEpisode from './DisplayRandomEpisode'

class GetRandomEpisode extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className='getRandomEpisode'>
        <div className='randomEpisodeDiv'>
          <DisplayRandomEpisode randomEpisode={this.props.randomEpisode} />
          <button className='random-episode-button'
            onClick={() => this.props.getRandomEpisode()}>Get Random Episode</button>
        </div>
      </div>
    )
  }

}

export default GetRandomEpisode