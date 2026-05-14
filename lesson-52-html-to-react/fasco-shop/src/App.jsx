import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import NotFound from './components/NotFound.jsx';
import Layout from './components/Layout.jsx';
import Product from './components/Product.jsx';

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
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:productId',
        element: <Product />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
