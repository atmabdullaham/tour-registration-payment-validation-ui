import { createBrowserRouter } from "react-router-dom";
import RegistrationForm from "../components/programme/RegistrationForm";
import Layout from "../layouts/Layout";

import AdminDashboard from "../pages/AdminDashboard";
import Login from "../pages/auth/Login";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MyRegistration from "../pages/MyRegistration";
import RegisterEnd from "../pages/RegisterEnd";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/registerend",
        element: <RegisterEnd />,
      },
      {
        path: "/registration",
        element: <RegistrationForm />,
      },
      {
        path: "/my-registration",
        element: <MyRegistration />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
