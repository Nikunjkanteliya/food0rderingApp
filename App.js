import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Errorpage from "./src/components/Errorpage";
import Aboutus from "./src/components/Aboutus";
import Options from "./src/components/Options";
import Cart from "./src/components/Cart";
import Restrauntmenu from "./src/components/Restrauntmenu";
// import { lazy } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/utilis/store";
import Signin from "./src/components/Signin";
import Signup from "./src/components/Signup";

// import contextCreated from "./src/utilis/context";
// let Restrauntmenu = lazy(() => {
//   return import("./src/components/Restrauntmenu");
// });
const Foodapp = () => {
  // const [info, setinfo] = useState({
  //   info: { name: "lucifer", date: new Date().toLocaleDateString() },
  // });
  return (
    <Provider store={store}>
      {window.location.pathname === "/" ||
      window.location.pathname === "/signin" ? null : (
        <Header />
      )}

      <Outlet />
      {window.location.pathname === "/" ||
      window.location.pathname === "/signin" ? null : (
        <Footer />
      )}
      {/* <Footer /> */}
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Foodapp />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Signup /> },
      { path: "/body", element: <Body /> },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      { path: "/options", element: <Options /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/restrauntmenu/:id",
        element: <Restrauntmenu />,

        // element: (
        //   <Suspense fallback={"shimmer"}>
        //     {" "}
        //     <Restrauntmenu />
        //   </Suspense>
        // ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

let targetedRoot = ReactDOM.createRoot(document.querySelector("#root"));

targetedRoot.render(<RouterProvider router={router} />);
