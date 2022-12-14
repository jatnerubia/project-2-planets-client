import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import './assets/sass/index.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/layout/Layout';
import HomePage from './pages/home'
import PlanetsPage from './pages/planets';
import AboutPage from './pages/about';
import PageNotFound from './pages/404';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/planets",
        element: <PlanetsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
