import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth } from './components/Auth/Auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { Menu } from './components/Menu/Menu';

let pages

if (!localStorage.getItem("tokenLogin")){
  pages = [
    {
      path: "/",
      element: <div>Hello World!</div>
    },
  ]
} else {
  pages = [
    {
      path: "/",
      element: <div>Hello World!</div>
    },
    {
      path: "/admin",
      element: (
        <AdminPanel></AdminPanel>
      )
    }
  ]
}
const router = createBrowserRouter(pages)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth />
    <RouterProvider router={router}/> */}
    <Menu></Menu>
  </React.StrictMode>
);
