import './Navbar.css';
import { Link } from 'react-router-dom';
// links com react router

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar