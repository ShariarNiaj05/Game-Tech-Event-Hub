
const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact With Us</h1>
      <p className="py-6">At GameTechEventHub, every gamer, tech enthusiast, and curious visitor matters. Whether you have a query, feedback, or just want to chat about the latest in gaming tech, we're here to listen. Reach out, and let's connect the dots in this dynamic world of interactive entertainment. Your insights help us level up, and together, we'll continue to shape the future of gaming and technology. Dive into the conversation today!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="message" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Contact;