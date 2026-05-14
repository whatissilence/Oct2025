

export default function ProductsFilter() {
  return (
    <aside className="max-w-[320px] hidden lg:block">
      <h2 className="text-3xl font-volkhov pb-8">Filters</h2>

      <section className="mb-[28px]">
        <h3 className="font-volkhov text-lg pb-6">Size</h3>
        <div className="font-jost flex flex-wrap gap-3 max-w-[160px]">
          <button className="size-btn size-btn-active">S</button>
          <button className="size-btn">M</button>
          <button className="size-btn">L</button>
          <button className="size-btn">XL</button>
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
          <button className="filter-btn focus:text-black">$0-$50</button>
          <button className="filter-btn">$50-$100</button>
          <button className="filter-btn">$100-$150</button>
          <button className="filter-btn">$150-$200</button>
          <button className="filter-btn">$300-$400</button>
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