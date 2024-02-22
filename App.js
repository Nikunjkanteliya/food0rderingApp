import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Errorpage from "./src/components/Errorpage";
import Aboutus from "./src/components/Aboutus";
import Options from "./src/components/Options";
import Cart from "./src/components/Cart";
import Restrauntmenu from "./src/components/Restrauntmenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Foodapp = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Foodapp />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/aboutus", element: <Aboutus /> },
      { path: "/options", element: <Options /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restrauntmenu/:id", element: <Restrauntmenu /> },
    ],
  },
]);

let targetedRoot = ReactDOM.createRoot(document.querySelector("#root"));

targetedRoot.render(<RouterProvider router={router} />);
