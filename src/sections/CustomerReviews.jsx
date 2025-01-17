import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section id="Reviews" className="max-container">
      <h3 className="font-palanquin font-bold text-center text-4xl">
        What Our
        <span className="mx-3 text-coral-red">
          Customers
        </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

    <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review, index) => (
        <ReviewCard key={review.customerName} review={review}/>
      ))}
    </div>

    </section>
  )
}

export default CustomerReviews