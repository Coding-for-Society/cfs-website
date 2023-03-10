import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Apply from "./pages/apply/Apply";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navigate replace to="/routes" />,
    },
    {
      path: "/routes",
      element: (
        <>
          <h1>Hi, choose your path here!</h1>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/goals">Goals</Link>
            </li>
            <li>
              <Link to="/apply">Apply</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </>
      ),
      children: [],
    },
    {
      path: "/home",
      element: <Home />,
      children: [],
    },
    {
      path: "/projects",
      element: <h1>projects</h1>,
      children: [],
    },
    {
      path: "/team",
      element: <h1>team</h1>,
      children: [],
    },
    {
      path: "/goals",
      element: <h1>goals</h1>,
      children: [],
    },
    {
      path: "/apply",
      element: <Apply />,
      children: [],
    },
    {
      path: "/contact",
      element: <h1>Contact</h1>,
      children: [],
    },
  ]);

  return <RouterProvider router={routes} />;
}
