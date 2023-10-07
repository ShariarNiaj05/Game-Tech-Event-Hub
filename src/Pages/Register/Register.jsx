import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const Register = () => {

    const { registerUser } = useContext(AuthContext)

    

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email')
        const password = form.get('password')
        const img = form.get('img')

        registerUser(name, email, img, password)
            .then(result => {
                console.log(result.user);
                
            })
            .catch(error => {
            console.log(error);
        })

    }
    console.log(name);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Register to get all the exciting insights
          </h1>
          <p className="py-6">
            oin the GameTechEventHub Community! Registering is your first step
            into a universe where gaming collides with cutting-edge tech. By
            becoming a member, you'll gain exclusive access to events, news, and
            networking opportunities that are shaping the future of interactive
            entertainment. Ready to level up? Start your journey with us today.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <span className="label-text">
                Demo link: https://i.ibb.co/FXRHLhh/thispersondoesnotexist.jpg
              </span>
              <input
                type="text"
                name="img"
                placeholder="image link"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <div className=" text-center p-2">
            Already have account?{" "}
            <Link to={"/login"}>
              {" "}
              <span className=" font-bold text-red-500">Login</span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
