import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth } from './components/Auth/Auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { Menu } from './components/Menu/Menu';
// import { AdminOrderMore } from './components/AdminOrder/AdminOrderMore';

let pages;

if (localStorage.getItem("tokenLogin")){
  pages = [
    {
      path: "/admin",
      element: (
        <AdminPanel></AdminPanel>
      )
    },
    // {
    //   path: `admin/orders/${number}`,
    //   element: <AdminOrderMore />
    // }
  ]
  
} else {
  pages = [
    {
      path: "/",
      element: <Menu></Menu>
    },
    {
      path: "/admin",
      element: <Auth />
    }
  ]
}
const router = createBrowserRouter(pages)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
