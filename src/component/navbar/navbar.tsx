import { useState, useEffect} from "react";
import {
    Link
} from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import './navbar.css';
import NavMenu from "./navbar-menu";

export default function Navbar() {
  const [scrollYPos, setScrollYPos] = useState(0);

  const menuClick = () => {
    
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollYPos(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const wrapperName = `nav-wrapper ${scrollYPos < 10 ? 'nav-show' : 'nav-hide'}`;
  
  return (
    <div id="nav-container">
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
        <div className="menu-button button-visibility">
          <button onClick={menuClick}><BsList /></button>
        </div>
      </div>
      <NavMenu />
    </div>
  );
}