import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import UpcomingEvents from "../Pages/UpcomingEvents/UpcomingEvents";
import Services from "../Pages/Home/Services";
import ServiceDetails from "../Pages/Home/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/service.json')
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/upcomingevents",
        element: <UpcomingEvents></UpcomingEvents>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: ()=>fetch('/service.json')
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ()=>fetch('/service.json')
      },
    ],
  },
]);

export default router;
