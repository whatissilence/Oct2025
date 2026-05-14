import Header from './Header.jsx';
import { Outlet } from 'react-router';
import Footer from './Footer.jsx';

export default function NotFound() {
  return (
    <>
      <Header />
        Not Found
      <Footer />
    </>
  )
}