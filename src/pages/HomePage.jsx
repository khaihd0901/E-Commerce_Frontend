import React, {  } from 'react'

function HomePage({user}) {
  return (
    <div className='text-3xl font-bold'>Hello {user?.displayName || 'Guest'}!</div>
  )
}

export default HomePage