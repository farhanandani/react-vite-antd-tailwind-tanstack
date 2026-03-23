import TanstackQueryProvider from "@/lib/TanstackQueryProvider";
import { AuthProvider } from "@/context/AuthContext";
import { AppRouter } from "./routes/Router";

function App() {
  return (
    <TanstackQueryProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </TanstackQueryProvider>
  );
}

export default App;
