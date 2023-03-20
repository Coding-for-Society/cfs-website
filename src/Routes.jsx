import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Apply from "./pages/apply/Apply";
import Contact from "./pages/contact/Contact";
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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
