import React, { Component } from "react";
class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {

    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;    </span>
          <div className='popUp-txt'>
            <h2>Episode Info</h2>
            <p>Air-date: {this.props.randomEpisode.airdate}</p>
            <p>Run-time: {this.props.randomEpisode.runtime}</p>
            <p>Summary: {this.props.randomEpisode.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default PopUp