import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Games from "../../Pages/Games/Games";
import GameDetails from "../../Pages/GameDetails/GameDetails";
import Contact from "../../Pages/Contact/Contact";
import Company from "../../Pages/Company/Company";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/games/:slug",
        element: <GameDetails></GameDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/company",
        element: <Company></Company>,
      },
    ],
  },
]);

export default router;
