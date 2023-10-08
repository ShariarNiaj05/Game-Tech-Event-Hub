import blog1 from '/blog1.jpg'
import blog2 from '/blog2.jpg'
import blog3 from '/blog3.jpg'
import blog4 from '/blog4.jpg'

const Blog = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img 
            src={blog1}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">The Evolution of Esports: A Trip Down Memory Lane</h2>
          <p>Dive into the transformative journey of esports. From its humble beginnings in local arcades to grand stages with million-dollar prize pools, explore how esports has reshaped the gaming landscape and what the future holds.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white hover:bg-black">Read More</button>
          </div>
        </div>
          </div>
          
          <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img 
            src={blog2}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Powering Play: A Look at Gaming's Technological Marvels</h2>
          <p>Behind every epic boss battle or vast open world lies a marvel of technology. Uncover the intricacies of game engines, advanced physics simulations, and the hardware that brings our favorite titles to life.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white hover:bg-black">Read More</button>
          </div>
        </div>
          </div>
          
          <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img 
            src={blog3}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Virtual Reality: The Next Chapter in Gaming Immersion</h2>
          <p>VR isn't just the future—it's the present. Join us as we delve into the mechanics of virtual reality in gaming, the challenges developers face, and the upcoming titles that will redefine immersive gameplay.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white hover:bg-black">Read More</button>
          </div>
        </div>
          </div>
          
          <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img 
            src={blog4}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Innovations in Multiplayer: How Tech is Connecting Gamers Globally</h2>
          <p>From split-screen duos to MMORPG guilds of hundreds, multiplayer gaming has undergone seismic shifts. the technologies that power these experiences and how they're making the gaming world more connected than ever.</p>
          <div className="card-actions justify-end">
            <button className="btn bg-red-500 text-white hover:bg-black hover:bg-black">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
