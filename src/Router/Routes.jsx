import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllBikes from "../Pages/AllBikes/AllBikes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-bikes",
        element: <AllBikes />,
      },
    ]
  },
]);

