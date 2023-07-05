import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css";

import ErrorBoundary from "./components/error.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
