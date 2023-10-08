import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import errorPage from "/404.jpg";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <img className=" w-1/2 mx-auto" src={errorPage} alt="error page" />
      <div className=" flex justify-center items-center gap-10 ">
        <button
          onClick={() => navigate(-1)}
          className=" btn bg-red-500 text-white hover:bg-black"
        >
          {" "}
          Go Back{" "}
        </button>
        <Link to={"/"}>
          <button className=" btn bg-red-500 text-white hover:bg-black">
            {" "}
            Go Home{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
