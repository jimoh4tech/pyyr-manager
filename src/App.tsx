import LogRocket from "logrocket";
import { LightMode } from "./components/ui/color-mode";
import { Toaster } from "./components/ui/toaster";
import { Router } from "./routes/routes";

function App() {
  LogRocket.init("qi0ax9/pyyr-app");
  return (
    <LightMode>
      <Toaster />
      <Router />
    </LightMode>
  );
}

export default App;
