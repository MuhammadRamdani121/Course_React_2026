import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Halaman2 from "../pages/Halaman2";

export const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/halaman2",
    element: <Halaman2 />,
  },
]);
