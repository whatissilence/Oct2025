import { Link, Outlet } from 'react-router';

export default function Products() {
  return (
    <div>
      Our Products is the best products in the World!
      <div>
        <Link to="/products/1">Product 1 (Fri)</Link>
      </div>
      <div>
        <Link to="/products/2">Product 2 (Tv)</Link>
      </div>

      <div className="product-card">
        <Outlet />
      </div>
    </div>
  )
}