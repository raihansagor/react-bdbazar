import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import Footer from "./components/footer";
import Product from './components/Product';
import Cart from "./pages/cart";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productsData } from './api/api';
import Login from './pages/login';
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
const router= createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
          loader:productsData,
        },
        {
          path:"/product/:id",
          element: <Product/>
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ]
    }
  ]
)


function App() {
  return (
    <div className="font-bodyFont">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
