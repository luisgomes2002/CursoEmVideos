import React from "react";
import "./GlobalStyled.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/HomeVideos.jsx";
import NavBar from "./components/nav/NavBar.jsx";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyled.jsx";
import VideosWatch from "./components/video/VideosWatch.jsx";
import VideoPage from "./components/video/VideoPage.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import Forgot from "./components/auth/ForgotPassword.jsx";
import Perfil from "./UserPage/Perfil.jsx";
import Cursos from "./userPage/Cusos.jsx";
import SeusCursos from "./userPage/SeusCursos.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:company/:id",
        element: <VideosWatch />,
      },
      {
        path: "/:company/:id/:videoName/:videoId",
        element: <VideoPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/perfil/cursos",
        element: <Cursos />,
      },
      {
        path: "/perfil/seuscursos",
        element: <SeusCursos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
