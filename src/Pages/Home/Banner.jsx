import bannerImg1 from "/bannerimg1.jpg";
import Aos from "aos";
// import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    /*  <div
      style={{ backgroundImage: `url(${bannerImg1})` }}
      className=" min-h-screen mx-auto justify-center  bg-no-repeat bg-cover bg-center bg-opacity-50 p-10 md:p-20 lg:p-40"
    >
    
        <h2 data-aos="fade-left" data-aos-duration="3000" className=" text-white text-4xl ">
          Unite at the Nexus of Gaming & Technology
        </h2>
        <p data-aos="fade-up" className=" text-white mt-5 text-lg font-semibold">
          Where pixels meet progress and controllers meet creativity.
          GameTechEventHub is your ultimate <br /> gateway to the most
          exhilarating tech-powered gaming events on the planet. <br /> Dive in,
          level up, and join the future of interactive entertainment!
        </p>
     
    </div> */

    <div className=" text-center w-full min-h-screen rounded-lg shadow-2xl overflow-hidden relative p-10 md:p-20 lg:p-40 ">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={bannerImg1}
        alt=""
      />
      <div className=" absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div className=" flex h-full items-center justify-start relative">
        <div>
          <h2
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" text-white text-4xl lg:mt-40 "
          >
            Unite at the Nexus of Gaming & Technology
          </h2>
          <p
            data-aos="fade-up"
            className=" text-white mt-5 text-lg font-semibold"
          >
            Where pixels meet progress and controllers meet creativity.
            GameTechEventHub is your ultimate <br /> gateway to the most
            exhilarating tech-powered gaming events on the planet. <br /> Dive
            in, level up, and join the future of interactive entertainment!
          </p>
        </div>
        <Link to={'/contact'}><button className="  hidden lg:block mt-96  text-white text-6xl bg-red-500 px-10 py-5 rounded-lg " data-aos="fade-down-right" data-aos-duration="3000">Connect <small className=" lg:text-sm ">To Get All The Insight</small></button></Link>
      </div>
    </div>
  );
};

export default Banner;
