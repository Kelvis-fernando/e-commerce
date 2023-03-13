import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Main } from "./styles/app";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products",
      element: <Products />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <Main>
      <RouterProvider router={router} />
    </Main>
  );
};

export default App;
