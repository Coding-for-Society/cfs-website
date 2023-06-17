import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Apply from "./pages/apply/Apply";
import Team from "./pages/team/Team";
import Goals from "./pages/goals/Goals";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Footer from "./components/footer/Footer";
import TeamDetail from "./pages/team/teamDetail/TeamDetail";
import Projects from "./pages/projects/Projects";
import ProjectsDetail from "./pages/projects/projectsDetail/ProjectsDetail";

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
            { path: "", element: <Projects /> },
            { path: ":id", element: <ProjectsDetail /> },
          ],
        },
        {
          path: "/team",
          element: <Outlet />,
          children: [
            { path: "", element: <Team /> },
            { path: ":id", element: <TeamDetail /> },
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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
