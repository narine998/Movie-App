import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const approuter = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, emailId, displayName, photoURL } = user;
        dispatch(addUser({ uid, emailId, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={approuter} />;
};

export default Body;
