import Banner from "./Banner";
import OurAchievement from "./OurAchievement";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
        <div className=" max-h-screen">
            <Banner></Banner>
            <WhatWeDo></WhatWeDo>
            <OurAchievement></OurAchievement>
        </div>
    );
};

export default Home;