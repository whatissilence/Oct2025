import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Layout from './components/Layout.jsx';
import Products from './components/Products.jsx';
import Product from './components/Product.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: '/products/:productId',
            element: <Product />,
          },
        ]
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}






// export default function App() {
//   return (
//     <BrowserRouter>
//       <HeaderMenu />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contacts />} />
//       </Routes>
//       <FooterMenu />
//     </BrowserRouter>
//   )
// }
