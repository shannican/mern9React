import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>Team Details {params.teamId}</h1>
    </div>
  )
}

export default page