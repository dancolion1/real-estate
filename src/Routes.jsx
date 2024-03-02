import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HeaderDomingocoSeven from "pages/HeaderDomingocoSeven";
import HeaderDomingocoOne from "pages/HeaderDomingocoOne";
import HeaderDomingocoFour from "pages/HeaderDomingocoFour";
import MacBookPro14One from "pages/MacBookPro14One";
import HeaderDomingocoFive from "pages/HeaderDomingocoFive";
import HeaderDomingocoTwo from "pages/HeaderDomingocoTwo";
import HeaderDomingocoSix from "pages/HeaderDomingocoSix";
import HeaderDomingoco from "pages/HeaderDomingoco";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HeaderDomingocoSeven />,
    },
    {
      path: "headerdomingocoone",
      element: <HeaderDomingocoOne />,
    },
    {
      path: "headerdomingocofour",
      element: <HeaderDomingocoFour />,
    },
    {
      path: "macbookpro14one",
      element: <MacBookPro14One />,
    },
    {
      path: "headerdomingocofive",
      element: <HeaderDomingocoFive />,
    },
    {
      path: "headerdomingocotwo",
      element: <HeaderDomingocoTwo />,
    },
    {
      path: "headerdomingocosix",
      element: <HeaderDomingocoSix />,
    },
    {
      path: "headerdomingoco",
      element: <HeaderDomingoco />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
