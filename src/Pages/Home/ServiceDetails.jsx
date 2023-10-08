import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const serviceDetails = services.find((service) => service.id == id);
  const {
    service_name,
    short_description,
    price,
    image,
    availability,
    duration,
    rating,
    reviews_count,
  } = serviceDetails;

  // console.log(serviceDetails);
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row mt-10 p-3">
        <figure>
          <img className=" lg:w-1/2" src={image} alt={service_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_name}</h2>
          <div className="badge badge-lg">Total Review: {reviews_count}</div>

          <div className="badge badge-lg">Rating: {rating}</div>
          <p>{short_description}</p>

          <button className="btn">
            Duration
            <div className="badge bg-red-500 text-white hover:bg-black">{duration}</div>
          </button>

          <div className="badge bg-red-500 text-white hover:bg-black">
            {availability}, ${price}
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white hover:bg-black">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
