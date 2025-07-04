import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/open-sans";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
