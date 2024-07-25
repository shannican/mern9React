import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end gap-10 fixed top-0 w-screen bg-pink-600 py-6 text-2xl px-10 text-white'>
        <Link href='/'>Home</Link>
        <Link href='/product'>Product</Link>
        <Link href='/about'>About</Link>
        <Link href='/courses'>Courses</Link>
    </div>
  )
}

export default Navbar