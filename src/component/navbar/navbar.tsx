import React from "react";
import {
    Link
} from 'react-router-dom';

import './navbar.css';


export default function Navbar() {
    return (
      <div className="nav-wrapper">
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
    )
}