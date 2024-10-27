import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"

import { useState } from "react"

import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images"



const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full p-2 xl:flex-row justify-center min-h-screen flex-col flex gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:leading-[82px] font-bold max-sm:text-[72px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="mb-14 flex-wrap flex font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start w-full flex-wrap gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">
                {stat.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImage}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage=
                {(shoe) => { setbigShoeImage(shoe) }}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}


export default Hero