import React from 'react'

const MyShowsItem = (props) => {

  return (
    <div className='myShow-list-item'>
      <div className='myShow-title-remove-div'>
        <p className='myShow-title'>{props.show.title}</p>
        <button className='remove-button' onClick={() => props.removeFromMyShows(props.show.myShows_id)}>Remove</button>
      </div>

      <div className='rating-div'>
        <button className='decrease' onClick={() => props.changeRating(props.show.myShows_id, 'decrease')}>-</button>
        <p className='rating'>Rating: {props.show.rating}</p>
        <button className='increase' onClick={() => props.changeRating(props.show.myShows_id, 'increase')}>+</button>
      </div>
    </div>
  )
}
export default MyShowsItem