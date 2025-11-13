import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Register from "./components/Register/Register.jsx";
import AllHabits from "./components/AllHabits/AllHabits.jsx";
import Login from "./Login/Login.jsx";
import { ToastContainer } from "react-toastify";
import HabitDetails from "./components/HabitDetails/HabitDetails.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import AddHabit from "./components/AddHabit/AddHabit.jsx";
import MyHabits from "./components/MyHabits/Myhabits.jsx";
import Error from "./components/Error/Error.jsx";
import LoadingSpin from "./components/LoadingSpinar/LoadingSpin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allHabits",
        Component: AllHabits,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "myHabit",
        element: (
          <PrivateRoute>
            <MyHabits></MyHabits>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/addHabit",
        element: (
          <PrivateRoute>
            <AddHabit />
          </PrivateRoute>
        ),
      },
      {
        path: "/habitDetails/:id",
        loader: ({ params }) =>
          fetch(`https://habit-hero-api-server.vercel.app/habits/${params.id}`),
        hydrateFallbackElement: <LoadingSpin></LoadingSpin>,
        element: (
          <PrivateRoute>
            <HabitDetails></HabitDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
