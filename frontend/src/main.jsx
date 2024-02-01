import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContext";
import ApiService from "./services/api.services";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import MesProjets from "./pages/MesProjets";

const apiService = new ApiService();

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      if (!apiService.isAuthenticated()) {
        return null;
      }

      try {
        const data = await apiService.get("http://localhost:3310/api/users/me");
        return { preloadUser: data ?? null };
      } catch (err) {
        console.error(err.message);
        return null;
      }
    },
    element: (
      <GlobalContextProvider apiService={apiService}>
        <App />
      </GlobalContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/projet/:title",
        element: <MesProjets />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
