import { star } from "../assets/icons"

const PopularProductCard = (product) => {
    return (
        <div className="flex flex-1 gap-2.5 flex-col w-full">
            <img
                src={product.imgURL}
                alt={product.name}
                className="w-[280px]"
            />
            <p className="flex">
                <img src={star} alt="rating" width={18} height={18}/>
                <span className="font-montserrat text-slate-gray ml-1">(4,5)</span>
            </p>
            <p className="font-semibold font-montserrat text-sm sm:text-xl">
                {product.name}
            </p>
            <p className="text-coral-red font-bold font-montserrat">
                {product.price}
            </p>
        </div>
    )
}

export default PopularProductCard