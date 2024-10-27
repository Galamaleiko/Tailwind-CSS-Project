import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-6 justify-start">
        <h2 className="font-palanquin text-4xl font-bold">
          Our
          <span
            className="px-2 text-coral-red">
            Popular
          </span>
          Products
        </h2>
        <p className="text-slate-gray font-montserrat xl:w-2/5">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        </div>

        <div className="flex flex-1 gap-2 mt-16">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
    </section>
  )
}

export default PopularProducts