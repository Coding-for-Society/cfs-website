import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Apply from "./pages/apply/Apply";
import Contact from "./pages/contact/Contact";

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
      element: <h1>Home</h1>,
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
      element: <Contact />,
      children: [],
    },
  ]);

  return <RouterProvider router={routes} />;
}
