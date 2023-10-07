import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { service_name, short_description, price, image, id } = service;
  console.log(service);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt={service_name}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{service_name}</h2>
            <p>{short_description}</p>
            <button className="btn btn-outline text-2xl">$ {price}</button>
            <div className="card-actions">
                          <Link to={`/servicedetails/${id}`}>
                          <button className="btn btn-secondary">Show Details</button>
                          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
