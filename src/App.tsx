import { LightMode } from "./components/ui/color-mode";
import { Toaster } from "./components/ui/toaster";
import { Router } from "./routes/routes";

function App() {
  return (
    <LightMode>
      <Toaster />
      <Router />
    </LightMode>
  );
}

export default App;
