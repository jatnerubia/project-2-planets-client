
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { useEffect} from "react";


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import './assets/sass/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
import LeaderboardPage from './pages/user/leaderboard';
import UserQuizPage from './pages/user/quiz'
import SettingsPage from './pages/user/settings'
import ProfilePage from './pages/user/profile';

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
            },
            {
                path: "leaderboard",
                element: <LeaderboardPage />
            },
            {
                path: "quiz",
                element: <UserQuizPage />
            },
            {
                path: "settings",
                element: <SettingsPage />
            },
            {
                path: "profile",
                element: <ProfilePage />
            }
        ]
    },
    /* Not found */
    {
        path: "*",
        element: <PageNotFound />
    }
])

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return <RouterProvider router={router} />
}

export default App
