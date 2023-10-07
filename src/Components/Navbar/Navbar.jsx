import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const linkStyle = ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : "";

  return (
    <div className=" flex flex-col md:flex-row justify-between sticky px-10 py-5 shadow-lg">
      <div>
        <h2 className=" text-2xl font-bold text-center">
          GameTech
          <span className=" bg-red-500 text-white p-2 rounded">EventHub</span>
        </h2>
      </div>
      <div className=" flex items-center gap-3 font-bold text-center mt-5 md:mt-0">
        <NavLink to={"/"} className={linkStyle}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={linkStyle}>
          About
        </NavLink>
        <NavLink to={"/contact"} className={linkStyle}>
          Contact
        </NavLink>
        <NavLink to={"/services"} className={linkStyle}>
          Services
        </NavLink>
        <NavLink to={"/upcomingevents"} className={linkStyle}>
          Upcoming Events
        </NavLink>
        <NavLink to={"/blog"} className={linkStyle}>
          Blog
        </NavLink>

        {user ? (
          <button onClick={handleLogOut} className=" btn btn-ghost">
            Sign Out
          </button>
        ) : (
          <NavLink to={"/login"} className={linkStyle}>
            Login
          </NavLink>
        )}
      </div>

      {/* <div className=" flex items-center gap-3 font-bold">
        <NavLink to={"/"} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : ""
  }>Home</NavLink>
        <NavLink to={"/about"} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : ""
  }>About</NavLink>
        <NavLink to={"/contact"} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : ""
  }>Contact</NavLink>
        <NavLink to={"/upcomingevents"} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : ""
  }>Upcoming Events</NavLink>
        <NavLink to={"/blog"} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : ""
  }>Blog</NavLink>
      </div> */}
      <Toaster />
    </div>
  );
};

export default Navbar;
