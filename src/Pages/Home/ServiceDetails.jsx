import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useLoaderData()
    console.log( services);

    return (
        <div>
           { id};
        </div>
    );
};

export default ServiceDetails;