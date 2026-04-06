import { Outlet } from 'react-router';
import HeaderMenu from './HeaderMenu.jsx';
import FooterMenu from './FooterMenu.jsx';

export default function Layout() {
  return (
    <>
      <HeaderMenu />
      <div className="content">
        Layout
        <Outlet />
      </div>
      <FooterMenu />
    </>
  )
}