import React from 'react';          // useState import kiya for  setToggle

import { HiX, HiMenuAlt4 } from 'react-icons/hi'; // import icons
import { motion } from 'framer-motion';           // Framer-Motion

import { images } from '../../constants';
import './Navbar.scss';
import { useState } from 'react';
import { useRef } from 'react';

const Navbar = () => {
  // creating setToggle
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'contact'].map((item) => (
        <li className='app__flex p-text' key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        { toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)} />
            {['home', 'about', 'work', 'contact'].map((item) => (   // Cut and Paste part from above
            <li key={item}>
              <a href={`#${item}`} onClick={() => setToggle(false) }> {item} </a>
            </li>
            ))}

          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
