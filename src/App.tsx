import React from 'react';
import './App.css';
import Navbar from './component/navbar/navbar';
import Footer from './component/footer/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Home from './page/home/home';
import Menu from './page/menu/menu';
import Reservation from './page/reservation/reservation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
