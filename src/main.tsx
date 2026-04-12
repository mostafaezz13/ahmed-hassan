import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Dashboard from "./components/Dashboard";
import { LanguageProvider } from "./contexts/LanguageContext";

const root = createRoot(document.getElementById("root")!);

// Basic routing
if (window.location.pathname === '/dashboard' || window.location.hash === '#dashboard') {
  root.render(
    <StrictMode>
      <LanguageProvider>
        <Dashboard />
      </LanguageProvider>
    </StrictMode>
  );
} else {
  root.render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>
  );
}
