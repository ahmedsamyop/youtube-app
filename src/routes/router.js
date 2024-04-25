import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import VideoDetails from "../pages/VideoDetails/VideoDetails";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/Errorpage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/video",
        element: <Navigate to={"/"} replace={true} />,
      },
      {
        path: "video/:id",
        element: <VideoDetails />,
      },
    ],
  },
]);

export default router;
