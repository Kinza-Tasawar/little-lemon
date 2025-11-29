import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/booking">RESERVATIONS</Link></li>
        <li><Link to="/order">ORDER ONLINE</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
