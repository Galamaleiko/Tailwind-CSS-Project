import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section id="services" className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServiceCard 
        key={service.label}
        {...service} />
      ))}

    </section>
  )
}

export default Services