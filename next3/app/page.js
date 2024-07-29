'use client'

import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState("")

  return (
    <div>
      
      <form>

        <input 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        className='text-4xl px-6 py-2 border-2 border-zinc-800 m-5'
        ></input>
        <button className='px-8 py-4 text-3xl bg-zinc-900 m-5 text-white rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default page