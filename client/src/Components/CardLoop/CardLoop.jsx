import React, { useEffect, useState } from 'react'
import { CardItem } from '../CardItem/CardItem'
import axios from "axios"
export const CardLoop = () => {
  
  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/pokeinfo")
      setData(data)
    }

    fetchData()
  }, [])


  
  return (
    <div  
    style={{
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "space-between"
    }}
    >
        {
          data?.map(l => {
            return(
              <CardItem 
              key={l.id}
              id={l.id}
              name={l.name}
              image={l.image}
            
            />
            ) 
          })
        }
    
    </div>
  )
}
