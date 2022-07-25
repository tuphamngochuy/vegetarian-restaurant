import {
  Link
} from 'react-router-dom';

const menuComponent = [{
  className: 'about',
  name: 'About',
}, {
  className: 'menu',
  name: 'Menu',
}, {
  className: 'reservation',
  name: 'Reservation',
}];

export default function NavMenu() {
  return (
    <div>
      {
        menuComponent.map((obj => {
          return (
            <div className={`menu-item ${obj.className}`}>
              <Link to={`\\${obj.className === 'about' ? '' : obj.className}`}>{obj.name}</Link>
            </div>
          );
        }))
      }
    </div>
  )
}