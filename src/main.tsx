import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext";
import { CoinContextProvider } from "./contexts/CoinDataContext";
const queryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 10000,
      gcTime: 60 * 10000,
    },
  },
});
createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClientInstance}>
    <CoinContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CoinContextProvider>
  </QueryClientProvider>
);
