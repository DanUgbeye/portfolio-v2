import React from "react";
import AppContextProvider from "./context/App.context";
import AppRoutes from "./routes";

export default function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
}
