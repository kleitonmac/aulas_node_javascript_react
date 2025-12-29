import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
// links com react router

const Navbar = () => {
  return (
    <nav className="nav">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
    </nav>
  )
}

export default Navbar