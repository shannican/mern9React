import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='flex text-3xl items-center justify-center h-60 -rotate-12 w-60 bg-pink-500 rounded-full fixed top-20 text-white font-semibold'>
        SALE
        </div>
        {children}
    </div>
  )
}

export default layout