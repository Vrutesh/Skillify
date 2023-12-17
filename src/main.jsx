import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-fo06vw8jxyg3vg7r.us.auth0.com"
    clientId="GyM3HRK4OaP44s5Oyn5OaIvZ4bmK1a9G"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
  /* </React.StrictMode>, */
);
