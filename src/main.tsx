import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Dashboard from "./components/Dashboard";

const root = createRoot(document.getElementById("root")!);

// Basic routing
if (window.location.pathname === '/dashboard' || window.location.hash === '#dashboard') {
  root.render(
    <StrictMode>
      <Dashboard />
    </StrictMode>
  );
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
