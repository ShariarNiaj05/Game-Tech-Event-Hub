import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData()
    // console.log(services);
  return (
    <div className=" my-10 p-5">
      <h2 className=" text-6xl font-bold text-center">
        Our Most Popular Services
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto justify-center items-center">
          {
              services.map(service => <Service key={service.id} service={service}></Service>)
          }
          </div>

      
    </div>
  );
};

export default Services;
