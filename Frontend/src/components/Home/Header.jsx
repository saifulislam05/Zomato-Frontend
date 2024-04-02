import React from 'react'
import SearchBox from '../WelcomePage/SearchBox'

const Header = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center py-3">
      <h1 className='text-4xl italic font-bold'>Zomato</h1>

      <SearchBox />
      <ul className="md:w-2/12  flex justify-between text-lg *:cursor-pointer">
        <li onClick={() => setIsLogInModalOpen(true)}>Log in</li>
        <li onClick={() => setIsSignUpModalOpen(true)}>Sign up</li>
      </ul>
    </div>
  );
}

export default Header