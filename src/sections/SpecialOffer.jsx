import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section id="offer" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h1 className="font-bold font-palanquin text-4xl lg:max-w-lg">
          <span className="text-coral-red px-2">
            Special
          </span>
          Offer
        </h1>
        <h2 className="py-4 lg:max-w-lg font-montserrat text-[15px] text-slate-gray mb-6">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          <p className="py-4 lg:max-w-lg" />
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </h2>
        <div className="flex flex-wrap mt-11 gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section >
  )
}

export default SpecialOffer