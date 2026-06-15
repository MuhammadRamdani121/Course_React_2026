import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Minggu_1 from "../pages/React_JS/Minggu_1";
import Jsx_1 from "../components/React_JS/Jsx_1";
import Component_2 from "../components/React_JS/Component_2";
import Props_3 from "../components/React_JS/Props_3";
import Event_4 from "../components/React_JS/Event_4";
import Latihan_1 from "../components/React_JS/Latihan_1/Latihan_1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/minggu_1",
    element: <Minggu_1 />,
    children: [
      {
        path: "Jsx_1",
        element: <Jsx_1 />,
      },

      {
        path: "Component_2",
        element: <Component_2 />,
      },
      {
        path: "Props_3",
        element: <Props_3 />,
      },
      {
        path: "Event_4",
        element: <Event_4 />,
      },
      {
        path: "Latihan_1",
        element: <Latihan_1 />,
      },
    ],
  },
]);
