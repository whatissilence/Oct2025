import { NavLink } from 'react-router';

export default function FooterMenu() {
  return (
    <ul className="footer-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
    </ul>
  )
}