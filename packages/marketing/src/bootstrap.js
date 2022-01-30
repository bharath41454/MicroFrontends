import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount func to start app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// In dev call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// Run through the container
export { mount };
