import { MdSportsEsports } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import whatWeDoImg from "/11172.jpg";
// import Aos from "aos";

const WhatWeDo = () => {
  return (
    <div className=" mt-20 mb-60 max-w-7xl container mx-auto ">
      <h2 className=" text-center font-bold text-4xl">
        What We Do?
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        <div>
          <div className=" flex flex-col md:flex-row gap-1">
            <div className=" hidden md:block md:text-6xl text-red-500">
              <MdSportsEsports></MdSportsEsports>
            </div>
            <div>
              <h3 className=" font-bold text-2xl md:text-4xl">
                Celebrating Gaming Culture
              </h3>
              <hr className=" mt-2 h-3 " />
              <p className=" font-semibold">
                More than just pixels and scores, we champion the stories,
                communities, and passion that make gaming a global phenomenon.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-1">
            <div className=" hidden md:block md:text-6xl text-red-500">
              <FaGamepad></FaGamepad>
            </div>
            <div>
              <h3 className=" font-bold text-2xl md:text-4xl">Bridging Worlds</h3>
              <hr className=" mt-2 h-3 " />
              <p className=" font-semibold">
                Melding the realms of cutting-edge technology and immersive
                gaming, we create experiences that captivate, educate, and
                inspire.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
                      className=" items-center justify-center w-96 md:w-full h-full rounded-full"
                      data-aos="zoom-in"
                      data-aos-duration="2500"
            src={whatWeDoImg}
            alt=""
          />
        </div>
        <div>
          <div className=" flex flex-col md:flex-row gap-1">
            <div className=" hidden md:block md:text-6xl text-red-500">
              <FaGamepad></FaGamepad>
            </div>
            <div>
              <h3 className=" font-bold text-2xl md:text-4xl">Innovative Approaches</h3>
              <hr className=" mt-2 h-3 " />
              <p className=" font-semibold">
                By always being at the intersection of the latest tech and
                gaming trends, we deliver fresh, groundbreaking events that set
                the standard.
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-1">
            <div className=" hidden md:block md:text-6xl text-red-500">
              <MdSportsEsports></MdSportsEsports>
            </div>
            <div>
              <h3 className=" font-bold text-2xl md:text-4xl">Community First</h3>
              <hr className=" mt-2 h-3 " />
              <p className=" font-semibold">
                Our events, platforms, and initiatives are built with the
                community at heart, ensuring authentic, enriching experiences
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
