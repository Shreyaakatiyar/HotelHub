import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import Profile from "../../assets/Profile.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
          <NavLink to="/">HotelHub</NavLink>
        </div>
        <div className="nav-links">
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/favourites">
              Favourites
            </NavLink>
        </div>
        <div className="profile">
          <img src={Profile} alt="Profile" />
        </div>
    </nav>
  )
}

export default Navbar