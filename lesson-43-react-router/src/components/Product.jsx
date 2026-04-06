import { useParams } from 'react-router';

const dataFromServer = {
  '1' : {
    name: 'Fridge',
    price: 1000,
    description: 'The super puper smart fridge'
  },
  '2' : {
    name: 'TV',
    price: 2000,
    description: 'The super puper smart TV'
  }
}

export default function Product() {
  const { productId } = useParams();

  const product = dataFromServer[productId];

  return (
    <>
      {product && product.name && (
        <div>
          <div>
            Id: {productId}
          </div>
          <div>
            Name: {product.name}
          </div>
          <div>
            Price: {product.price}
          </div>
          <div>
            Description: {product.description}
          </div>
        </div>
      )}

      {!product && <div> No such product</div>}
    </>
  )
}