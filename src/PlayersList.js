import React from 'react'
import Player from './Player'
import players from './Players'

function PlayersList() {
  return (
    <div>
     {players.map((player,index) => ( 
<Player key={index}{...player} />
     )
    )
    }
    </div>
  )
}

export default PlayersList
