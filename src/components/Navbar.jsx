
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import {navLinks} from '../constants/index.js'
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={' sm:px-16  px-6  w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
    <Link to= "/" className = "flex items-center gap-2"
    onClick={() => {
      setActive("");
      window.scrollTo(0,0)
    }}
    >
    <img src={logo} alt='logo.png' className='h-14 object-contain'/>
    <p>Jay Prakash N Reddy</p>
    </Link>
    <ul className='list-none hidden sm:flex flex-row gap-10'>
      {navLinks.map((links) => (
        <li key={links.id} className={`${
          active === links.title?"text-white":"text-secondary" }
           hover:text-white text-[17px] transition  ease-out duration-300 font-medium cursor-pointer`}
           onClick={() => setActive(links.title)}>
          <a href={`#${links.id}`}>{links.title}</a>
        </li>
      ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img
        src= {toggle ? close : menu }
        alt='menu'
        className='w-7 h-7 object-contain cursor-pointer'
        onClick={() => setToggle(!toggle)}
      />
      <div className= {`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
      <ul className='list-none flex justify-end items-start flex-col gap-4'>
      {navLinks.map((links) => (
        <li key={links.id} className={`${
          active === links.title?"text-white":"text-secondary" }
          font-poppins font-medium cursor-pointer text-[16px ] hover:text-white transition ease-out duration-350`}
          onClick={() => { setToggle(!toggle); setActive(links.title);}
          }>
          <a href={`#${links.id}`}>{links.title}</a>
        </li>
      ))}
      </ul>
      </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar