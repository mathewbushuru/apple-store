import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/home-page";
import ContactPage from "@/pages/contact-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
