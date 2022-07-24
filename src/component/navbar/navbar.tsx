import { useState, useEffect} from "react";
import {
    Link
} from 'react-router-dom';

import './navbar.css';


export default function Navbar() {
  const [scrollYPos, setScrollYPos] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollYPos(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const wrapperName = `nav-wrapper ${scrollYPos < 10 ? 'nav-show' : 'nav-hide'}`;
  
  return (
    <div className={wrapperName}>
      <div className="nav-name">
        Vegeterian Place
      </div>
      <div className="nav-button-list">
        <ul>
          <li className="nav-button">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-button">
            <Link to='/menu'>Menu</Link>
          </li>
          <li className="nav-button">
            <Link to='/reservation'>Reservation</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}