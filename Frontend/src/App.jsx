import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <WelcomePage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
