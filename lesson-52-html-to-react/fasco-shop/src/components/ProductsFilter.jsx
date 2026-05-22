

export default function ProductsFilter({ filter, updateFilter }) {
  const handleSizeChange = (clickedSize) => {
    let sizes = [...filter.sizes];

    if (sizes.includes(clickedSize)) {
      sizes = sizes.filter((existingSize) => existingSize !== clickedSize);
    } else {
      sizes.push(clickedSize); // add M
    }

    console.log('clicked size', clickedSize);
    updateFilter({
      ...filter,
      sizes
    })
  }

  const handlePriceChange = (min, max) => {
    let prices = [...filter.prices];

    if (prices.includes(`${min}-${max}`)) {
      prices = prices.filter((price) => price !== `${min}-${max}`);
    } else {
      prices.push(`${min}-${max}`);
    }

    updateFilter({
      ...filter,
      prices,
    })
  }

  const getPriceClassName = (min, max) => {
    if (filter.prices.includes(`${min}-${max}`)) {
      return 'filter-btn text-black';
    }

    return 'filter-btn';
  }

  const getSizeClassName = (size) => {
    if (filter.sizes.includes(size)) {
      return 'size-btn size-btn-active';
    }

    return 'size-btn';
  }

  return (
    <aside className="max-w-[320px] hidden lg:block">
      <h2 className="text-3xl font-volkhov pb-8">Filters</h2>

      <section className="mb-[28px]">
        <h3 className="font-volkhov text-lg pb-6">Size</h3>
        <div className="font-jost flex flex-wrap gap-3 max-w-[160px]">
          <button className={getSizeClassName('S')} onClick={() => handleSizeChange('S')}>S</button>
          <button className={getSizeClassName('M')} onClick={() => handleSizeChange('M')}>M</button>
          <button className={getSizeClassName('L')} onClick={() => handleSizeChange('L')}>L</button>
          <button className={getSizeClassName('XL')} onClick={() => handleSizeChange('XL')}>XL</button>
        </div>
      </section>

      <section className="mb-[28px] flex flex-col flex-wrap">
        <h3 className="font-volkhov text-lg pb-6">Colors</h3>
        <div className="flex flex-wrap gap-3">
          <button className="colors-btn bg-red-500 colors-btn-active"></button>
          <button className="colors-btn bg-orange-400"></button>
          <button className="colors-btn bg-yellow-400"></button>
          <button className="colors-btn bg-lime-500"></button>
          <button className="colors-btn bg-green-500"></button>
          <button className="colors-btn bg-emerald-500"></button>
          <button className="colors-btn bg-teal-500"></button>
          <button className="colors-btn bg-sky-500"></button>
          <button className="colors-btn bg-blue-500"></button>
          <button className="colors-btn bg-indigo-500"></button>
          <button className="colors-btn bg-violet-500"></button>
          <button className="colors-btn bg-purple-500"></button>
          <button className="colors-btn bg-fuchsia-500"></button>
          <button className="colors-btn bg-pink-500"></button>
        </div>
      </section>

      <section className="mb-[28px]">
        <h3 className="font-[Volkhov-Font] text-lg pb-6">Prices</h3>
        <div
          className="flex items-start flex-col gap-[10px] font-poppins text-light">
          <button className={getPriceClassName(0, 50)} onClick={() => handlePriceChange(0, 50)}>$0-$50</button>
          <button className={getPriceClassName(50, 100)} onClick={() => handlePriceChange(50, 100)}>$50-$100</button>
          <button className={getPriceClassName(100, 150)} onClick={() => handlePriceChange(100, 150)}>$100-$150</button>
          <button className={getPriceClassName(150, 200)} onClick={() => handlePriceChange(150, 200)}>$150-$200</button>
          <button className={getPriceClassName(200, 400)} onClick={() => handlePriceChange(200, 400)}>$200-$400</button>
        </div>
      </section>

      <section className="mb-[28px]">
        <h3 className="font-[Volkhov-Font] text-lg pb-6">Brands</h3>
        <div
          className="font-poppins text-light flex flex-wrap gap-3 max-w-[200px]">
          <button className="filter-btn focus:text-black">Minimog</button>
          <button className="filter-btn">Retrolie</button>
          <button className="filter-btn">Brook</button>
          <button className="filter-btn">Learts</button>
          <button className="filter-btn">Vagabond</button>
          <button className="filter-btn">Abby</button>
        </div>
      </section>

      <section className="mb-[28px]">
        <h3 className="font-[Volkhov-Font] text-lg pb-6">Prices</h3>
        <div
          className="flex items-start flex-col gap-[10px] font-poppins text-light">
          <button className="filter-btn focus:text-black">All products</button>
          <button className="filter-btn">Best sellers</button>
          <button className="filter-btn">New arrivals</button>
          <button className="filter-btn">Accessories</button>
        </div>
      </section>

      <section className="mb-[28px]">
        <h3 className="font-[Volkhov-Font] text-lg pb-6">Brands</h3>
        <div className="font-poppins text-light flex flex-wrap gap-3">
          <button className="filter-btn focus:text-black">Fashion</button>
          <button className="filter-btn">Hats</button>
          <button className="filter-btn">Sandal</button>
          <button className="filter-btn">Belt</button>
          <button className="filter-btn">Bags</button>
          <button className="filter-btn">Snacker</button>
          <button className="filter-btn">Denim</button>
          <button className="filter-btn">Minimog</button>
          <button className="filter-btn">Vagabond</button>
          <button className="filter-btn">Sunglasses</button>
          <button className="filter-btn">Beachwear</button>
        </div>
      </section>
    </aside>
  )
}