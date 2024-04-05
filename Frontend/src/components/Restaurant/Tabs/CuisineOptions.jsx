import React from 'react'
import { Link } from 'react-router-dom'

const CuisineOptions = ({link,title}) => {
  return (
      <Link to={link} className='w-fit py-1 px-2 border rounded-xl'>
          <span>{ title}</span>
    </Link>
  )
}

export default CuisineOptions