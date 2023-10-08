import Footer from "../../Components/Footer/Footer";
import Banner from "./Banner";
import OurAchievement from "./OurAchievement";
import Services from "./Services";
import Testimonial from "./Testimonial";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
  return (
    <div className=" max-h-screen">
            <Banner></Banner>
            <WhatWeDo></WhatWeDo>
            <OurAchievement></OurAchievement>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
  );
};

export default Home;
