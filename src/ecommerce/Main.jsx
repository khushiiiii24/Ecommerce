import First from "./pages/First";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import "./Ecommerce.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import UserContext from "./components/UseContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRouter from "./pages/ProtectedRouter";
// import '../App.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRouter>
            <Cart />,
          </ProtectedRouter>
        ),
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Main() {
  return (
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  );
}

export default Main;
