import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router";
import { Route, Switch } from "react-router";
import { SelectPersonaContainer } from "src/scenes/choose-persona";
import { injectGlobal } from "styled-components";
import { rootReducer } from "./reducer";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: "Helvetica", sans-serif;
  }
`;

const middlewares = [];
/*eslint no-process-env: 0*/
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  // const loggerMiddleware = createLogger();
  // middlewares.push(loggerMiddleware);
}
const history = createBrowserHistory();
middlewares.push(routerMiddleware(history));
const store = createStore(
  connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

const ReduxApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={SelectPersonaContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById("root"));
registerServiceWorker();
