import React from 'react'
import MyShowsItem from './MyShowsItem'
import GetRandomEpisode from './GetRandomEpisode'

const MyShows = (props) => {
  const myShowMap = props.myShows.map((element) => {
    return (
      <MyShowsItem 
      key={element.id} 
      show={element}
      changeRating={props.changeRating}
      removeFromMyShows={props.removeFromMyShows} 
      />
    )
  })

  return (
    <div className='myShows'>
      <h2 className='list-title'>My Shows</h2>
      <div className='list-of-shows'>{myShowMap}</div>
      <button className='clearShows-button'onClick={() => props.clearShows()}>Clear All My Shows</button>
    </div>
  )
}

export default MyShows