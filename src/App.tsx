import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Producer from "./pages/Producer";
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
      path: "/producer",
      element: <Producer />,
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
