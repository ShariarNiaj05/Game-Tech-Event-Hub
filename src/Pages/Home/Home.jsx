import Banner from "./Banner";
import OurAchievement from "./OurAchievement";
import Testimonial from "./Testimonial";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
        <div className=" max-h-screen">
            <Banner></Banner>
            <WhatWeDo></WhatWeDo>
            <OurAchievement></OurAchievement>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;