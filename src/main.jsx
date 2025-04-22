import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

// components
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Blogs from "./pages/Blogs.jsx";
import NotFound from "./pages/404.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, element: <Home /> },
      { path: "my-bookings", element: <MyBookings /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
