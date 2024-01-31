import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  const {dark, darkMode} = props
  return (
    <header className='flex justify-center h-14 m-auto bg-pink-500 text-white text-center'>
      <div className= 'm-auto'>
        <h1 className='text-center text-xl mr-2'>TASKS</h1>
        <button onClick={() => darkMode()}>
        {dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}

        </button>
      </div>
    </header>
  )
}
 
export default Header
