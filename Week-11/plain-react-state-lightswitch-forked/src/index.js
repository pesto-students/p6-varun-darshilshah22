import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Room from "./App";

import { Provider } from "react-redux";
import { store } from "./store/flip";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <Room />
    </StrictMode>
  </Provider>
);
