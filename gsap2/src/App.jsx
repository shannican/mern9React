import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const App = () => {

  const bheemRef = useRef(null)

  useGSAP(function(){
    gsap.to(bheemRef.current,{
      x:1400,
      duration:2,
      scale:2,
      delay:1
    })
  })

  return (
    <div>
      <img ref={bheemRef} src="https://i.pinimg.com/originals/4f/82/bd/4f82bd416fd55b8924607d378918cf54.png" alt="" />
    </div>
  )
}

export default App