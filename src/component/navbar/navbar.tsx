import { useState, useEffect} from "react";
import {
    Link
} from 'react-router-dom';
import { BsList } from 'react-icons/bs';
import './navbar.css';
import NavMenu from "./navbar-menu";

export default function Navbar() {
  const [scrollYPos, setScrollYPos] = useState(0);
  const [navMenuState, setNavMenuState] = useState(false);

  const menuClick = () => {
    setNavMenuState(true);
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
          <ul>
            <li className="nav-button nav-line">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-button nav-line">
              <Link to='/space'>About us</Link>
            </li>
            <li className="nav-button nav-line">
              <Link to='/menu'>Menu</Link>
            </li>
            <li className="nav-button nav-line">
              <Link to='/reservation'>Reservation</Link>
            </li>
            <li className="nav-button">
              <Link to='/feedback'>Feedback</Link>
            </li>
          </ul>
        <div className="menu-button button-visibility">
          <button onClick={menuClick}><BsList /></button>
        </div>
      </div>
      <div className={`nav-menu-wrapper ${navMenuState === true ? 'nav-menu-show' : 'nav-menu-hide'}`}>
        <NavMenu />
      </div>
    </div>
  );
}