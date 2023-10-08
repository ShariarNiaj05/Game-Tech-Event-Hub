import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import UpcomingEvents from "../Pages/UpcomingEvents/UpcomingEvents";
import Services from "../Pages/Home/Services";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
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
        element: (
          <PrivateRoutes>
            <Blog></Blog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/upcomingevents",
        element: (
          <PrivateRoutes>
            <UpcomingEvents></UpcomingEvents>
          </PrivateRoutes>
        ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/servicedetails/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/service.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
