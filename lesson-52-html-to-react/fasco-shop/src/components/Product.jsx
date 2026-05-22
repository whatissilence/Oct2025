

export default function Product({ product }) {
  return (
    <article>
      <div className="relative">
        <img
          className="mb-5 w-full"
          src={product.image}
          alt="rounded-hat"/>
      </div>
      <h3 className="mb-1 font-volkhov">{product.name}</h3>
      <p className="mb-5 font-jost">${Number(product.price).toFixed(2)}</p>
      <form className="flex gap-3">
        {product.colors.map((color, index) => (
          <label key={color}>
            <input
              type="radio"
              name="color"
              value="yellow"
              className="hidden peer"
              defaultChecked={index === 0} />
            <span className={`${color}  item-color-filter`}></span>
          </label>
        ))}
      </form>
    </article>
  )
}