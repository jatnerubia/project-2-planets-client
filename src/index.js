import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import './assets/sass/index.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* Home */
import Layout from './components/layout/Layout';
import HomePage from './pages/main/home'
import PlanetsPage from './pages/main/planets';
import AboutPage from './pages/main/about';

/* Verify */
import VerifyPage from './pages/verify/verify';

/* Quiz */
import QuizLayout from './components/layout/QuizLayout';
import QuizPage from './pages/quiz/quiz';
import RegisterPage from './pages/quiz/register';
import LoginPage from './pages/quiz/login';
import ForgotPasswordPage from './pages/quiz/forgot_password';
import ResetPasswordPage from './pages/quiz/reset_password';

/* User */
import UserLayout from './components/layout/UserLayout';
import DashboardPage from './pages/user/dashboard';

/* Not found */
import PageNotFound from './pages/404';

const router = createBrowserRouter([
  /* Main */
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
  /* Verify */
  {
    path: "verify",
    element: <VerifyPage />
  },
  /* Quiz */
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
  /* User */
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
  /* Not found */
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
