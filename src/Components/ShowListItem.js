import React from 'react'

const ShowListItem = (props) => {

  return (
    <div className='show-list-item'>
      <p className='show-title'>{props.show.title}</p>
      <button className='add-button' onClick={() => props.addToMyShows(props.show.show_id)}>Add</button>

    </div>
  )
}
export default ShowListItem