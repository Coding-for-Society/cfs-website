import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Apply from "./pages/apply/Apply";
import Contact from "./pages/contact/Contact";
import Goals from "./pages/goals/Goals";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Footer from "./components/footer/Footer";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavigationBar />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "",
          element: <Navigate replace to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
          children: [],
        },
        {
          path: "/projects",
          element: <Outlet />,
          children: [
            { path: "", element: <h1>Projects</h1> },
            { path: ":id", element: <h1>Dynamic Segment: Projects</h1> },
          ],
        },
        {
          path: "/team",
          element: <Outlet />,
          children: [
            { path: "", element: <h1>Team</h1> },
            { path: ":id", element: <h1>Dynamic Segment: Team</h1> },
          ],
        },
        {
          path: "/goals",
          element: <Goals />,
          children: [],
        },
        {
          path: "/apply",
          element: <Apply />,
          children: [],
        },
        {
          path: "/contact",
          element: <Contact />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
