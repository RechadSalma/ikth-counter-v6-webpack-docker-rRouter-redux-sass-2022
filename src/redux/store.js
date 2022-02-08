import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { reducers } from "./reducers/index.js";

const composeEnhancers = composeWithDevTools({
  name: "iK redux devtool",
  trace: true,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
