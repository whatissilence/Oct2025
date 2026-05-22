import buttonListViewIcon from "../assets/images/button-list-view.svg"
import button2ColumnGridIcon from "../assets/images/button-2-column-grid.svg"
import button3ColumnGridIcon from "../assets/images/button-3-column-grid.svg"
import button4ColumnGridIcon from "../assets/images/button-4-column-grid.svg"
import button5ColumnGridIcon from "../assets/images/button-5-column-grid.svg"
import ProductsFilter from './ProductsFilter.jsx';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsService.js';
import Product from './Product.jsx';

export default function Products() {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({
    sizes: [],
    prices: []
  });

  let displayedProducts = [...originalProducts];

  if(filter.sizes.length > 0){
    displayedProducts = displayedProducts.filter(
      product => product.sizes.some(size => filter.sizes.includes(size))
    )
  }

  if(filter.prices.length > 0){
    displayedProducts = displayedProducts.filter(
      product => filter.prices.some(priceStr => {
        const [min, max] = priceStr.split('-').map(Number);
        return product.price >= min && product.price <= max;
      })
    )
  }

  const handleFilterChange = (filterNew) => {
    console.log('filter old', filter);
    console.log('filter new', filterNew);
    setFilter(filterNew);
  }

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const productsData = await getProducts();
      setOriginalProducts(productsData);

      console.log(productsData)

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <div className="mx-auto max-w-7xl text-center pb-24">
        <h1 className="text-5xl pb-5 font-volkhov">Fashion</h1>
        <div className="text-base flex justify-center gap-4 font-jost">
          <a href="index.html">Home</a>
          <span>&gt;</span>
          <a href="#">Fashion</a>
        </div>
      </div>

      <section className="container mx-auto max-w-7xl flex">

        <ProductsFilter filter={filter} updateFilter={handleFilterChange} />


        <main className="w-full">
          <button className="hidden">
            <img src="src/images/icon-close.svg" alt="close"/>
          </button>
          <button
            className="xl:hidden font-volkhov text-3xl border border-2 px-20 py-3 flex justify-center mx-auto mb-10 cursor-pointer">
            Filters
          </button>

          <div className="flex justify-between mb-5">
            <form method="get">
              <select className="font-volkhov" name="filter" id="filter">
                <option value="bestselling">Best Selling</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </form>
            <div>
              <button>
                <img
                  src={buttonListViewIcon}
                  alt="button-list-view"/>
              </button>
              <button>
                <img
                  src={button2ColumnGridIcon}
                  alt="button-2-column-grid"/>
              </button>
              <button>
                <img
                  src={button3ColumnGridIcon}
                  alt="button-3-column-grid"/>
              </button>
              <button>
                <img
                  src={button4ColumnGridIcon}
                  alt="button-4-column-grid"/>
              </button>
              <button>
                <img
                  src={button5ColumnGridIcon}
                  alt="button-5-column-grid"/>
              </button>
            </div>
          </div>

          <section className="grid grid-cols-3 gap-7 mb-20">
            {
              displayedProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            }


          </section>

          <nav className="flex justify-center gap-2 mb-18">
            <button
              className="w-11 h-11 rounded-full font-jost bg-white text-black hover:border-1 hover:border-black focus:bg-gray-100">
              <a href="#">1</a>
            </button>
            <button
              className="w-11 h-11 rounded-full font-jost bg-white text-black hover:border-1 hover:border-black focus:bg-gray-100">
              <a href="#">2</a>
            </button>
            <button
              className="w-11 h-11 rounded-full font-jost bg-white text-black hover:border-1 hover:border-black focus:bg-gray-100">
              <a href="#">3</a>
            </button>
            <button
              className="w-11 h-11 rounded-full font-jost bg-white text-black hover:border-1 hover:border-black focus:bg-gray-100">
              <a href="#">»</a>
            </button>
          </nav>
        </main>
      </section>

      <section
        className="bg-style bg-no-repeat bg-center bg-cover max-w-[1920px] mx-auto flex items-center justify-center xl: flex-wrap">
        <div>
          <img src="src/images/bg-style-girl.png" alt="style-girl"/>
        </div>

        <div
          className="font-poppins space-y-5 max-w-[470px] p-5 bg-white xl:bg-transparent">
          <p className="text-[#767676]">Women Collection</p>
          <h2 className="font-volkhov text-dark text-5xl">Peaky Blinders</h2>
          <p className="underline decoration-solid">DESCRIPTION</p>
          <p className="text-[#767676]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[#767676]">Size:</p>
            <button className="text-white bg-black px-[20px] py-[6px] rounded-[10px]">
              M
            </button>
          </div>
          <p className="text-[28px]">$100.00</p>
          <button
            className="text-white bg-black px-[70px] py-[20px] rounded-[10px] cursor-pointer shadow-2xl">
            Buy Now
          </button>
        </div>
      </section>

      <section
        className="flex justify-between py-18 flex-wrap gap-6 items-center max-w-[1280px] mx-auto">
        <div className="flex gap-4">
          <img src="src/images/icon-high-quality.svg" alt="high-quality"/>
          <div className="font-poppins">
            <h3 className="text-[20px]">High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src="src/images/icon-warrany-protection.svg"
            alt="warrany-protection"/>
          <div className="font-poppins">
            <h3 className="text-[20px]">Warrany Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="src/images/icon-free-shipping.svg" alt="free-shipping"/>
          <div className="font-poppins">
            <h3 className="text-[20px]">Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="src/images/icon-support.svg" alt="support"/>
          <div className="font-poppins">
            <h3 className="text-[20px]">24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>

      <section>
        <div
          className="flex flex-col items-center text-center py-24 bg-gradient-to-b from-[#f8f8f8] to-transparent">
          <h2 className="font-volkhov text-5xl text-dark mb-5">
            Follow Us On Instagram
          </h2>
          <p className="font-poppins max-w-[615px] text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>
        <div className="mb-[195px] flex justify-center items-center">
          <div>
            <img src="src/images/scroll-photo-1.png" alt="scroll-photo"/>
          </div>
          <div>
            <img src="src/images/scroll-photo-2.png" alt="scroll-photo"/>
          </div>
          <div>
            <img src="src/images/scroll-photo-3.png" alt="scroll-photo"/>
          </div>
          <div>
            <img src="src/images/scroll-photo-4.png" alt="scroll-photo"/>
          </div>
          <div>
            <img src="src/images/scroll-photo-5.png" alt="scroll-photo"/>
          </div>
          <div>
            <img src="src/images/scroll-photo-6.png" alt="scroll-photo"/>
          </div>
          <div>
            <img src="src/images/scroll-photo-7.png" alt="scroll-photo"/>
          </div>
        </div>
      </section>

      <section
        className="mx-auto flex items-center text-center justify-center font-poppins mb-12 gap-8">
        <div className="hidden md:block">
          <img src="src/images/newsletter-men.png" alt="newsletter"/>
        </div>

        <div className="flex flex-col">
          <h2 className="font-volkhov text-5xl text-dark mb-5">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-light max-w-[615px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
          <input
            type="email"
            placeholder="michael@ymail.com"
            className="text-[22px] px-9 py-7 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required/>
          <div className="bg-gradient-to-b from-[#f2f2f2] to-transparent py-8">
            <button
              className="text-white bg-black px-11 py-5 rounded-[10px] px-5 shadow-2xl">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="src/images/Newsletter-women.png" alt="newsletter"/>
        </div>
      </section>
    </>
  )
}