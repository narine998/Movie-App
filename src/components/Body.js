import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Browse from "./Browse";
import Login from "./Login";

const approuter = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return <RouterProvider router={approuter} />;
};

export default Body;
