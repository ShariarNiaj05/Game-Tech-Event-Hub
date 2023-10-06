import banner3 from '/bannerimg3.jpg'
import banner4 from '/bannerimg4.jpg'
import banner5 from '/11172.jpg'
const UpcomingEvents = () => {
  return (
      <div>
          
          <h2 className=' text-4xl font-bold m-5 text-center'> Most Exciting Up Coming Events</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">FutureScape 2023: The Next Gaming Frontier</h2>
          <p>Dive deep into the future of gaming at FutureScape 2023. From the intricacies of AI-driven narratives to the next leap in VR experiences, join industry pioneers and enthusiasts in exploring the innovations set to redefine our gaming experiences. Don't miss our keynote speaker, Dr. Eva Ramirez, hailed as the 'Future Visionary of Gaming', as she unveils her predictions.</p>
        </div>
        <figure>
          <img
            src={banner3}
            alt="Shoes"
          />
        </figure>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">TechPlay Expo: Where Hardware Meets Gameplay</h2>
          <p>Ever wondered about the tech powering your favorite games? TechPlay Expo is the place to be! Witness firsthand the unveiling of next-gen consoles, cutting-edge peripherals, and the hardware innovations destined to enhance gameplay. Engage with leading tech giants, and try your hands on gadgets before they hit the market.</p>
        </div>
        <figure>
          <img
            src={banner4}
            alt="Shoes"
          />
        </figure>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">PixelFest: Celebrating Indie Game Developers</h2>
          <p>PixelFest is a celebration of creativity, storytelling, and the magic of indie games. Meet passionate developers, play yet-to-be-released titles, and hear inspiring stories of how small teams bring big dreams to life on screen. Featuring panel discussions, game demos, and networking sessions, it's a festival of indie brilliance.</p>
        </div>
        <figure>
          <img
            src={banner5}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
    </div>
  );
};

export default UpcomingEvents;
