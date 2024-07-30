import React, { useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";

const App = () => {

  const mangalRef = useRef(null);

  const [xPosition, setXPosition] = useState(0)
  const [yPosition, setYPosition] = useState(0)
  const [rotating, setRotating] = useState(0)

  const moveMangal = () => {
    const xMove = Math.random()*90
    const yMove = Math.random()*85
    const rotate = Math.random()*360

    setXPosition(xMove)
    setYPosition(yMove)
    setRotating(rotate)
    
  };

  useGSAP(function(){
    gsap.to(mangalRef.current,{
      left:`${xPosition}%`,
      top:`${yPosition}%`,
      rotate:rotating
    })
  },[xPosition,yPosition])

  

  return (
    <div>
      <img
        ref={mangalRef}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC42rI1W011tMASJmf5S5_iZu5QfQxUNLW-Q&s"
        alt=""
      />
      <button onClick={moveMangal}>Animate</button>
    </div>
  );
};

export default App;
