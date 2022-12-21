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

import QuizLayout from './components/layout/QuizLayout';
import Login from './pages/quiz/login';

import UserLayout from './components/layout/UserLayout';
import Dashboard from './pages/user/dashboard';

import PageNotFound from './pages/404';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "planets",
        element: <PlanetsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ]
  },
  {
    path: "quiz",
    element: <QuizLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "user",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      }
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
