import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
]);
export default routes;
