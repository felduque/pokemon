import React from 'react'
import { CardDetail } from '../CardDetail/CardDetail'
import { CardLoop } from '../CardLoop/CardLoop'

export const Home = () => {
  return (
    <div style={{
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      flexDirection: "column"
    }}>  
      <div style={{
        width: "100%",
        justifyContent: 'space-evenly',
        display: 'flex',
        alignItems: "center",
        backgroundColor: "#867774"
      }}>
        <div style={{
          paddingLeft: 10
        }}>          
        <h1 style={{
          color: "white"
        }}>
          PokeDex
        </h1>
        </div>
        <div style={{
          paddingRight: 30
        }}> 
            <h2 style={{
          color: "white",
        }}>
              Encuentra tus pokemones favoritos
            </h2>
        </div>
      </div>


      <div>

        <CardLoop />

      </div>

    </div>
  )
}
