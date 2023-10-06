import { TbBuildingCommunity } from "react-icons/tb";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { GiStrong } from "react-icons/gi";

const OurAchievement = () => {
  return (
    <div className=" bg-red-500 text-center p-10">
      <h2 className="text-4xl font-black text-white mb-5">Our Achievement</h2>
      <div className=" flex flex-col md:flex-row items-center justify-center gap-20">
        <div className=" font-bold text-2xl">
          <div className=" text-white font-bold text-4xl text-center">
            <TbBuildingCommunity></TbBuildingCommunity>
          </div>
          <h4>Community Engagement</h4>
          <p>500,000+</p>
        </div>
              <div className=" font-bold text-2xl text-center">
              <div className=" text-white font-bold text-4xl text-center">
            <MdSentimentSatisfiedAlt></MdSentimentSatisfiedAlt>
          </div>
          <h4>satisfaction </h4>
          <p>98%</p>
        </div>
              <div className=" font-bold text-2xl">
              <div className=" text-white font-bold text-4xl text-center">
            <GiStrong></GiStrong>
          </div>
          <h4>Sustainable Initiatives </h4>
          <p>100%</p>
        </div>
      </div>
    </div>
  );
};

export default OurAchievement;
