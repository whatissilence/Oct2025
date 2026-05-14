const products = [
  {
    id: 1,
    name: 'Rounded Hat',
    price: 8,
    image: '/productsImages/rounded-hat.png',
    colors: ['bg-red-600', 'bg-black'],
    isSoldOut: false,
  },
  {
    id: 2,
    name: 'Linen-blend Shirt',
    price: 17,
    image: '/productsImages/linen-blend-shirt.png',
    colors: ['bg-black', 'bg-orange-400', 'bg-sky-400'],
    isSoldOut: true,
  },
  {
    id: 3,
    name: 'Long Sleeve Coat',
    price: 106,
    image: '/productsImages/long-sleeve-coat.png',
    colors: ['bg-black', 'bg-amber-50'],
    isSoldOut: false,
  },
  {
    id: 4,
    name: 'Boxy Denim Hat',
    price: 25,
    image: '/productsImages/boxy-denim-hat.png',
    colors: ['bg-blue-800', 'bg-red-500'],
    isSoldOut: false,
  },
  {
    id: 5,
    name: 'Linen Plain Top',
    price: 25,
    image: '/productsImages/linen-plain-top.png',
    colors: ['bg-black', 'bg-emerald-800'],
    isSoldOut: false,
  },
  {
    id: 6,
    name: 'Oversized T-shirt',
    price: 8,
    image: '/productsImages/oversized-t-shirt.png',
    colors: ['bg-red-600', 'bg-black', 'bg-lime-500'],
    isSoldOut: false,
  },
  {
    id: 7,
    name: 'Polarised Sunglasses',
    price: 18,
    oldPrice: 21,
    image: '/productsImages/polarised-sunglasses.png',
    colors: ['bg-[url(/colorTextures/squares-texture.svg)]', 'bg-black'],
    isSoldOut: false,
  },
  {
    id: 8,
    name: 'Rockstar Jacket',
    price: 22,
    image: '/productsImages/rockstar-jacket.png',
    colors: ['bg-black'],
    isSoldOut: false,
  },
  {
    id: 9,
    name: 'Dotted Black Dress',
    price: 20,
    image: '/productsImages/dotted-black-dress.png',
    colors: ['bg-black', 'bg-amber-50'],
    isSoldOut: false,
  },
];

export async function getProducts() {
  return Promise.resolve(products)
}