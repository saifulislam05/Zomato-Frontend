import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import { AuthProvider } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/restaurant/:restaurantId",
    element: <RestaurantDetails />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
