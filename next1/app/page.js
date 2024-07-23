"use client"
import React, { useState } from 'react'

const page = () => {

  const [username, setUsername] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username)
    setUsername("")
  }
  return (
    <div>
      <form 
      onSubmit={(e)=>{
          submitHandler(e)
      }}
      className='p-10'
      >
      <input 
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      type='text' 
      className='py-4 px-10 text-4xl border-2 border-zinc-600 rounded'
      ></input>
        <button className='text-4xl px-10 py-4 bg-black text-white font-medium rounded ml-10'>Submit</button>
      </form>
    </div>
  )
}

export default page