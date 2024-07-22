import React, { useContext } from 'react'
import { PhoneContext } from './context/ProductContext'
import Footer from './components/Footer'

const App = () => {

  const PhoneData = useContext(PhoneContext)

  console.log(PhoneData)
  return (
    <div>
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

export default App