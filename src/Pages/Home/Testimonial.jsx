
// import AOS from 'aos';
import "aos/dist/aos.css";
// import Aos from "aos";

import person1 from "/person1.jpg";
import person2 from "/person2.jpg";
import person3 from "/person3.jpg";
const Testimonial = () => {
  return (
    <div className=" max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto mt-10">
      <h2 className=" text-center font-black text-3xl">Testimonial</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
              
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Unmatched Experience</h2>
            <h2 className=" font-bold">Alex Thompson</h2>
            <p>
              GameTechEventHub has consistently outdone themselves year after
              year. Their dedication to bridging gaming and tech provides an
              exceptional platform for enthusiasts and professionals alike. Our
              studio's collaboration with them has opened doors we never even
              knew existed!
            </p>
            <div className="card-actions justify-between items-center ">
              <img className=" h-20 w-20 rounded-full" src={person1} alt="" />
              <button className="btn btn-neutral">PixelPioneer Studios</button>
            </div>
          </div>
              </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Where Gaming Glory Shines</h2>
            <h2 className=" font-bold">Priya Malhotra</h2>
            <p>
            From the moment I stepped into one of GameTechEventHub's events, I felt the energy and passion. Their expertise in crafting seamless gaming experiences is top-notch. As a competitive player, this platform has been pivotal in elevating my career.
            </p>
            <div className="card-actions justify-between items-center ">
              <img className=" h-20 w-20 rounded-full" src={person2} alt="" />
              <button className="btn btn-neutral">ElectroLegends Pro</button>
            </div>
          </div>
              </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">The Pulse of Gaming Tech!</h2>
            <h2 className=" font-bold">Charlie Nguyen</h2>
            <p>
            If there's one place to get the inside scoop on what's next in the gaming tech world, it's GameTechEventHub. Their events are a treasure trove of insights, innovations, and connections. Attending one of their gatherings is a must for anyone in the industry.
            </p>
            <div className="card-actions justify-between items-center ">
              <img className=" h-20 w-20 rounded-full" src={person3} alt="" />
              <button className="btn btn-neutral">FutureGadget Pulse</button>
            </div>
          </div>
              </div>
              
      </div>
    </div>
  );
};

export default Testimonial;
