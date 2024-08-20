import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" key="home">
        Home
      </NavLink>
      <NavLink to="/directors" key="directors">
        Directors
      </NavLink>
      <NavLink to="/actors" key="actors">
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;