import React, { Component } from 'react'
import PopUp from './Popup'
class DisplayRandomEpisode extends Component {
  constructor() {
    super()

    this.state = {
      seen: false,
    }
  }

  togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };

  render() {
    return (
      <div className='displayRandomEpisode'>
        <div className='randoInfo-container'>
          <div className='randoInfo'>
            <h2 className='randoShowTitle'>{this.props.randomEpisode.title}</h2>
            <h3 className='randoEpiTitle'>"{this.props.randomEpisode.name}"</h3>
            <p className='randoSEpNo'>Season {this.props.randomEpisode.season}, Episode {this.props.randomEpisode.number}</p>
          </div>

          <div>
            <div className="popUp-btn" onClick={this.togglePop}>
              <img className='infoIcon' src='https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/information-mark-letter-info-sign-256.png' />
            </div>
            {this.state.seen ? <PopUp randomEpisode={this.props.randomEpisode} toggle={this.togglePop} /> : null}
          </div>
        </div>

        <img className='episode-img' src={this.props.randomEpisode.image} />

      </div>
    )
  }

}

export default DisplayRandomEpisode