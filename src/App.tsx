import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Products/ProductDetails";
import Products from "./pages/Products/Products";
import { Provider as ReduxProvider } from "react-redux";
import Root from "./Root";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        children: [
          {
            path: "",
            element: <Products />,
          },
          {
            path: ":id",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
