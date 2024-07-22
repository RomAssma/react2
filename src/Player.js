import React from "react";
import Card from 'react-bootstrap/Card';


function Player({  name,team,nationality,jerseyNumber,age,imageUrl }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={imageUrl} />
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
    {nationality}
    <br/>
    {team}
    <br/>
    {jerseyNumber}
    <br/>
    {age}
  </Card.Text>
 
</Card.Body>
</Card>
    </div>
  )
}
Player.defaultProps={
    name: "Player Name",
    team: "Team Name",
    nationality: "Nationality",
    jerseyNumber: "10",
    age: "25",
    imageURL: "https://via.placeholder.com/150"}
export default Player;


