import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";

const DOMAIN: string = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENTID: string = import.meta.env.VITE_AUTH0_CLIENT_ID;
const CALLBACK: string = import.meta.env.VITE_AUTH0_CALLBACK_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      authorizationParams={{
        redirect_uri: CALLBACK,
      }}
    >
      <Navbar />
      <RouterProvider router={router} />
      <Profile />
      <Footer />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
