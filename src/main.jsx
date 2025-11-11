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

const router = createBrowserRouter([
  {
    path: "/",
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
      // {
      //   path: 'myProducts',
      //   element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
      // },
      {
        path: '/addHabit',
        element: <PrivateRoute><AddHabit/></PrivateRoute>
      },
      {
        path: "/habitDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/habits/${params.id}`),
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
