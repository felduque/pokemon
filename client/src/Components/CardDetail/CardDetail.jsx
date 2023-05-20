import React from 'react'
import { useParams } from 'react-router-dom'
export const CardDetail = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <div style={{
      backgroundColor: "#CDA69D"
    }}
    >
<h1>
  Hola mundo
</h1>
    </div>
  )
}
