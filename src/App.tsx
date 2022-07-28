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
import About from './page/about/about';
import Feedback from './page/feedback/feedback';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/space' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
