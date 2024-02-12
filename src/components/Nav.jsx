import React from 'react'
import Logo from '/src/assets/reshot-icon-code-CZ2NMXUGQ8.svg'


export const Nav = () => {
  return (
    <div className=' w-full h-full bg-transparent'>
        <nav className='flex justify-between items-center'>
        <a href="App.jsx" alt='Home'><img className=' w-14 pl-4' src={Logo} alt="Logo"/></a>
        <ul className='flex gap-10 text-white p-5'>
          <li><a href="">Home</a></li>
          <li><a href="">Project</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>          
        </ul>
        </nav>
    </div>
  )
}
