import React from 'react'
import { Link } from 'react-router-dom'

export const CardItem = ({
  name, image, id
}) => {

  console.log(name, image, id)
  return (
    <div style={{
      background: "white",
      width: "200px",
      height: "200px",
      margin: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px"
    }}>
      <div>
      <Link to={`/card/${id}`} style={{
        listStyle: "none",
        textDecoration: 'none'
      }}>      
        <h2>{name?.toUpperCase()}</h2>
        </Link>
      </div>
      <div>
        <img src={image} alt={name}  style={{
          width: "100px",   
          height: "100px"
          
          
          }}/>
      </div>
    </div>
    
  )
}
