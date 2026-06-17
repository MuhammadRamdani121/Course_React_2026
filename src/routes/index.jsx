import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ReactHome from "../pages/React_JS/Index";
import TailwindCss from "../pages/Tailwind_Css/Index";
import Jsx_1 from "../components/React_JS/Jsx_1";
import Component_2 from "../components/React_JS/Component_2";
import Props_3 from "../components/React_JS/Props_3";
import Event_4 from "../components/React_JS/Event_4";
import Latihan_1 from "../components/React_JS/Latihan_1/Latihan_1";
import Warna from "../components/Tailwind_CSS/DasarTailwind/Warna";
import UkuranText from "../components/Tailwind_CSS/DasarTailwind/UkuranText";
import KetebalanFont from "../components/Tailwind_CSS/DasarTailwind/KetebalanFont";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  // Link To Pages React JS
  {
    path: "/React_JS",
    element: <ReactHome />,
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

  //Link To Pages Tailwind CSS
  {
    path: "/Tailwind_CSS",
    element: <TailwindCss />,
    children: [
      {
        path: "Warna",
        element: <Warna />,
      },

      {
        path: "UkuranText",
        element: <UkuranText />,
      },
      {
        path: "KetebalanFont",
        element: <KetebalanFont />,
      },
      // {
      //   path: "Event_4",
      //   element: <Event_4 />,
      // },
      // {
      //   path: "Latihan_1",
      //   element: <Latihan_1 />,
      // },
    ],
  },
]);
