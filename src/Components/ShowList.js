import React from 'react'
import ShowListItem from './ShowListItem'

const ShowList = (props) => {

  const showMap = props.shows.map((element) => {
    return (
      <ShowListItem 
        key={element.id} 
        show={element}
        addToMyShows={props.addToMyShows}
        />
    )
  })

  return (
    <div className='showList'>
      <h2 className='list-title'>Show List</h2>
      <div className='list-of-shows'>{showMap}</div>
    </div>
  )
}
export default ShowList