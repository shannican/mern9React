import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-8 px-20 bg-pink-500 text-white'>
        <h2 className='font-medium text-xl'>Sheryians</h2>
        <div className='flex gap-20 font-medium text-xl'>
        <Link href='/'>Home</Link>

            <Link href='/about'>About</Link>
            <Link href='/product'>Product</Link>
            <Link href='/services'>Services</Link>

        </div>
    </div>
  )
}

export default Navbar