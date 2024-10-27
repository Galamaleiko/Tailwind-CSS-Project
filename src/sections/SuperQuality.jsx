import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us">
      <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
        <div className="">
          <h1 className="font-bold font-palanquin text-4xl lg:max-w-lg">
            We Provide You
            <span className="text-coral-red px-2">
              Super Quality
            </span>
            Shoes</h1>

          <h2 className="py-4 lg:max-w-lg font-montserrat text-[15px] text-slate-gray mb-6">
            Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.
            <p className="py-4 lg:max-w-lg" />
            Our dedication to detail and excellence ensures your satisfaction
          </h2>

          <Button label="View details" iconURL="" />
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default SuperQuality