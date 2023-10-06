import { NavLink } from "react-router-dom";

const Navbar = () => {

    const linkStyle = ( { isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-500 text-white rounded p-2" : ""


  return (
    <div className=" flex flex-col md:flex-row justify-between sticky px-10 py-5">
      <div>
        <h2 className=" text-2xl font-bold text-center">GameTech<span className=" bg-red-500 text-white p-2 rounded">EventHub</span></h2>
      </div>
      <div className=" flex items-center gap-3 font-bold text-center mt-5 md:mt-0">
        <NavLink to={"/"} className={linkStyle}>Home</NavLink>
        <NavLink to={"/about"} className={linkStyle}>About</NavLink>
        <NavLink to={"/contact"} className={linkStyle}>Contact</NavLink>
        <NavLink to={"/upcomingevents"} className={linkStyle}>Upcoming Events</NavLink>
        <NavLink to={"/blog"} className={linkStyle}>Blog</NavLink>
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
    </div>
  );
};

export default Navbar;
