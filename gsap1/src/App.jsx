import React, { useRef } from 'react'

const App = () => {

  const h1Ref = useRef(null)

  const btnClicked = ()=>{
    if(h1Ref.current.textContent == "Stranger"){
      h1Ref.current.innerHTML = "Friends"
    }else{
      h1Ref.current.innerHTML = "Stranger"
    }
  }
  return (
    <div>
      <h1 ref={h1Ref}>Stranger</h1>
      <button onClick={btnClicked}>Change</button>
    </div>
  )
}

export default App