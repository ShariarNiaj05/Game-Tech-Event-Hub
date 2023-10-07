import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    const email = form.get('email')
        const password = form.get('password')

    console.log(email, password);

      signInUser(email, password)
      .then((result) => {
        const presentUser = result.user;


        navigate(location?.state ? location.state : '/')

        console.log(presentUser);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Welcome back to GameTechEventHub! Dive into the confluence of gaming
            and technology by logging in. Not a member yet? Join our community
            to explore, interact, and stay updated with the latest trends and
            events. Your journey into the nexus of the gaming tech world begins
            with a single login.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
          <div className=" text-center p-2">
            New to our website?{" "}
            <Link to={"/register"}>
              {" "}
              <span className=" font-bold text-red-500">Register</span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
