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
import LoginPage from './pages/quiz/login';

import UserLayout from './components/layout/UserLayout';
import DashboardPage from './pages/user/dashboard';

import VerifyPage from './pages/verify/verify';

import PageNotFound from './pages/404';
import RegisterPage from './pages/quiz/register';
import QuizPage from './pages/quiz/quiz';
import ForgotPasswordPage from './pages/quiz/forgot_password';
import ResetPasswordPage from './pages/quiz/reset_password';

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
        path: "",
        element: <QuizPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />
      }
    ]
  },
  {
    path: "user",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />
      }
    ]
  },
  {
    path: "verify",
    element: <VerifyPage />
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
