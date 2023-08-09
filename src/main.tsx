import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css";

import ErrorBoundary from "./components/error.tsx";
import AuthProvider from "./contexts/auth.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AuthProvider>
  </React.StrictMode>
);
