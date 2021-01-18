import * as React from "react";
import { render } from "react-dom";

import App from "./App";

import { createOvermind } from "overmind";
import { Provider } from "overmind-react";

import Test from "./Component/Test";
import { config } from "./Overmind";

const overmind = createOvermind(config, {
  devtools: "localhost:3000",
});

const rootElement = document.getElementById("root");
render(
  <Provider value={overmind}>
    <Test />
  </Provider>,
  rootElement
);
