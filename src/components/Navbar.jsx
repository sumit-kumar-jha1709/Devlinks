import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div id="navWrapper" className='bg-white flex justify-between w-11/12 p-2 rounded-md px-5'>
          <button id="backToEditorButton" 
          className='p-3 border-2 rounded-md border-purply text-base text-purply w-40
            hover:bg-purply hover:text-white
          '><Link to="/"> Back to Editor </Link>
          </button>
          <button id="shareLinkButton"
          className='ml-2 p-3 border-2 rounded-md text-base bg-purply w-40 text-white
            hover:border-purply hover:bg-white hover:text-purply
          '>
                Share Link
          </button>
        </div>
    </>
  )
}

export default Navbar