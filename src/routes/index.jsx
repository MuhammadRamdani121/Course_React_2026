import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Halaman2 from "../pages/Halaman2";
import TodoHalaman from "../pages/TodoHalaman";

export const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/halaman2",
    element: <Halaman2 />,
  },
  {
    path: "/TodoHalaman",
    element: <TodoHalaman />,
  },
]);
