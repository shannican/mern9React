import React, { useContext } from 'react'
import { PhoneContext } from '../context/ProductContext'

const Footer = () => {

    const PhoneData = useContext(PhoneContext)


    return (
    <div style={{
        background:"red"
    }}>
        {PhoneData.map(function(elem){

return <div>
  <h2>{elem.name}</h2>
  <h4>{elem.price}</h4>
  <h5>{elem.color}</h5>
  <h6>{elem.company}</h6>
  <p>{elem.description}</p>
</div>
})}
    </div>
  )
}

export default Footer