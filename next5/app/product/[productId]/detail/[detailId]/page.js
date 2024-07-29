import React from 'react'

const page = ({params}) => {
  return (
    <div>{params.detailId} Details of {params.productId} Page </div>
  )
}

export default page