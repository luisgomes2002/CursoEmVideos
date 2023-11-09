import React from "react";
import "./GlobalStyled.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar.jsx";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyled.jsx";
import VideosWatch from "./components/video/VideosWatch.jsx";
import VideoPage from "./components/video/VideoPage.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
