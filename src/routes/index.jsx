import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Halaman2 from "../pages/Halaman2";
import TodoHalaman from "../pages/TodoHalaman";
import Minggu1 from "../pages/Minggu1";

export const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Minggu1",
    element: <Minggu1 />,
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
