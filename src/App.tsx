import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/Products/ProductDetails";
import Products from "./pages/Products/Products";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <div>Hello World</div>,
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
  return <RouterProvider router={router} />;
}

export default App;
