import React from 'react';
import { Link, useMatch } from 'react-router';

export default function MySuperLink({product}) {
  const address = `/products/${product.id}`;
  const match = useMatch(address);

  const activeStyle = {
    color: match ? 'red' : 'blue',
    fontWeight: 'bold',
  };

  if(match) {
    return null;
  }

  return (
    <div>
      <Link to={address} style={activeStyle}>{`${product.name} (${product.type})`}</Link>
    </div>
  );
}