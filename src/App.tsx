import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import HomePage from "@/modules/home/pages/home-page";
import ContactPage from "@/global-pages/contact-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
