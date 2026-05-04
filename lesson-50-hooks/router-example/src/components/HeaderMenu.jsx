import { NavLink } from 'react-router';

export default function HeaderMenu() {
  return (
    <ul className="header-menu">
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