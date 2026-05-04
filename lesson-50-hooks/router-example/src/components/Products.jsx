import { Link, Outlet,  } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import MySuperLink from './MySuperLink.jsx';

const productsList = [
  {
    id: 1,
    name: 'Product 1',
    type: 'Fri',
  },
  {
    id: 2,
    name: 'Product 2',
    type: 'Tv',
  }
]

export default function Products() {
  const [searchP, setsearchP] = useSearchParams();

  const searchProductType = searchP.get('type')
  console.log('searchProductType', searchProductType)

  let productFiltered = productsList.filter(p => p.type === searchProductType)

  productFiltered = productFiltered.length > 0 ? productFiltered : productsList;

  return (
    <div>
      Our Products is the best products in the World!
      {
        productFiltered.map((product) => (
          <MySuperLink product={product} key={product.id} />
        ))
      }

      <div className="product-card">
        <Outlet />
      </div>
    </div>
  )
}