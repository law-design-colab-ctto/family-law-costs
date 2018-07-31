import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducer";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router";
import { Route, Switch } from "react-router";
import { SelectPersonaContainer } from "src/scenes/choose-persona";
import { injectGlobal } from "styled-components";

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

const history = createBrowserHistory();
const loggerMiddleware = createLogger();
const store = createStore(
  connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerMiddleware(history), loggerMiddleware)
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
