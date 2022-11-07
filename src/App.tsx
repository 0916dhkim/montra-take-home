import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div>Hello World</div>,
      },
      {
        path: "products",
        element: <div>Hello products</div>,
      },
      {
        path: "cart",
        element: <div>Your cart</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
