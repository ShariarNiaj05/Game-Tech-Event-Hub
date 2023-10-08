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
    isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : " hover:bg-black hover:text-white rounded p-2";
  
    const navLink = <>
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
    
            
    </>

  return (
    <div className=" flex flex-col md:flex-row justify-between sticky px-10 py-5 shadow-lg z-50">

      
<div className="navbar bg-base-100 flex-col md:flex-row justify-center items-center">
  <div className="navbar-start justify-center items-center">
    <div className="dropdown z-10 items-center gap-3 font-bold text-center mt-5 md:mt-0">
      <label tabIndex={0} className="btn btn-ghost lg:hidden justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <h2 className=" text-base md:text-2xl font-bold text-center">
          GameTech
          <span className=" bg-red-500 text-white p-2 rounded">EventHub</span>
        </h2>
  </div>
  <div className="navbar-center hidden z-10 lg:flex justify-center items-center">
    <ul className="menu menu-horizontal px-1 items-center gap-3 font-bold text-center mt-5 md:mt-0">
      
            {navLink}
    </ul>
  </div>
        <div className="navbar-end justify-center items-center">
          {
            user && <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src={user.photoURL} />
            </div>
          </label>
                <p>{ user.displayName}</p>
            </>
        }
  {user ? (
              <button onClick={handleLogOut} className=" btn btn-ghost">
                Log Out
              </button>
            ) : (
              <NavLink to={"/login"} >
                <button className=" btn bg-red-500 text-white hover:bg-black">Login</button>
              </NavLink>
            )}
  </div>
</div>

      




   {/*    -------------
      <div>
        <h2 className=" text-2xl font-bold text-center">
          GameTech
          <span className=" bg-red-500 text-white p-2 rounded">EventHub</span>
        </h2>
      </div>
      <div className=" flex items-center gap-3 font-bold text-center mt-5 md:mt-0">
        {navlink}
      </div>
--------------------- */}
      



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
