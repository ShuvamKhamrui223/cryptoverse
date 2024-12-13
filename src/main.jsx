import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { CoinContextProvider } from "./contexts/CoinDataContext.tsx";
const queryClientInstance = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClientInstance}>
    <CoinContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CoinContextProvider>
  </QueryClientProvider>
);
