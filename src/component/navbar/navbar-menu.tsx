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
    <div className="nav-menu-wrapper">
      {
        menuComponent.map((obj => {
          return (
            <div className={`menu-item ${obj.className}`}>
              {obj.name}
            </div>
          );
        }))
      }
    </div>
  )
}