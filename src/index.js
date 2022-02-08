import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/store.js";

/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
window.addEventListener("unhandledrejection", function (event) {
  console.warn("iK unhandledrejection (promise): ", event.promise);
  console.warn("iK unhandledrejection (reason): ", event.reason);
});

/*iK React with not redux store */
/*IK you could set up react context api if needed */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
); /*END ReactDOM.render() */
