import banner2 from '/bannerimg2.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${banner2})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About GameTechEventHub: Where Gaming Meets Innovation</h1>
      <p className="mb-5">Founded in 2023, GameTechEventHub emerged from a simple passion: the love for gaming intertwined with the marvels of technology. We believe that when these two worlds collide, extraordinary experiences are born.

Our team, a blend of gaming enthusiasts and tech wizards, has tirelessly worked to bridge this gap, turning virtual fantasies into tangible realities. Over the years, GameTechEventHub has grown into a global nexus where players, developers, innovators, and fans come together to celebrate, learn, and push the boundaries of what's possible.

Today, GameTechEventHub stands as more than just a platform; it's a movement. A movement that champions the future of interactive entertainment, that values every pixel and code, and above all, cherishes the vibrant community that makes it all worthwhile.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;