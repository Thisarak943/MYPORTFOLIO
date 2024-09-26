import React, { useState } from 'react';
import "./Navbar.css";
import { SiWebmoney } from 'react-icons/si';
import { menu } from "../../data";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className='navbar__container'>
      {showSidebar ? (
        <div className='overlay' onClick={() => setShowSidebar(false)}></div>
      ) : null}

      <div className="logo__container">
        <SiWebmoney />
      </div>

      <div className={`tab__group ${showSidebar ? 'show' : ''}`}>
        <span className="icon__container close__btn" onClick={() => setShowSidebar(false)}>
          <FaTimes />
        </span>

        {menu.map((item, index) => (
          <Link
            key={index}
            activeClass='active'
            className='tab__item name'
            to={item.name.toLowerCase()}
            spy={true}
            offset={-70}
            duration={500}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="nav__buttons__group">
        <a href="mailto:thisarak943@gmail.com" className='btn btn__primary'>Hire Me</a>
        <FaBars className='menu' onClick={() => setShowSidebar(!showSidebar)} />
      </div>
    </nav>
  );
}

export default Navbar;
