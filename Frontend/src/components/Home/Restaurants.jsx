import React from 'react'
import RestaurantsCards from './RestaurantsCards'

const Restaurants = () => {
  return (
      <div className='w-full md:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-6'>
          <RestaurantsCards/>
          <RestaurantsCards/>
          <RestaurantsCards/>
    </div>
  )
}

export default Restaurants