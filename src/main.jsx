import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import axios from "axios";
import { ToastContainer } from "react-toastify";

// pages
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Blogs from "./pages/Blogs.jsx";
import NotFound from "./pages/404.jsx";
import LawyerDetails from "./pages/LawyerDetails.jsx";
import LawyerNotFound from "./components/LawyerNotFound.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await axios({
            method: "get",
            url: "/data.json",
          });

          return res.data;
        },
      },
      {
        path: "lawyers/:license",
        element: <LawyerDetails />,
        errorElement: <LawyerNotFound />,
        loader: async ({ params }) => {
          const res = await axios({
            method: "get",
            url: "/data.json",
          });

          const data = res.data;

          const lawyer = data.find(
            (lawyer) => lawyer.license === params.license.split("-").join(" ")
          );

          if (!lawyer) {
            throw new Error("Lawyer not found");
          }

          return lawyer;
        },
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
        loader: () => {
          let appointments = localStorage.getItem("lawyer_appointments");
          if (!appointments) {
            appointments = [];
          } else {
            appointments = JSON.parse(appointments);
          }

          return appointments;
        },
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: async () => {
          const res = await axios({
            method: "get",
            url: "/blogs.json",
          });

          return res.data;
        },
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
