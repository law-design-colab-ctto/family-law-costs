import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router";
import { Route, Switch } from "react-router";
import { ChoosePersonaContainer } from "src/scenes/choose-persona";
import { PersonaPageContainer } from "src/scenes/persona-page";
import { injectGlobal } from "styled-components";
import { rootReducer } from "./reducer";
import registerServiceWorker from "./registerServiceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import InfoPage from "./scenes/methodology-page/methodology-page.component";
<<<<<<< HEAD
import InfoPageAbout from "./scenes/about-page/about-page.component";
=======
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
>>>>>>> 9c7f38ba1eecb4f94bc5ce5455a40a937a9caf9a

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
    line-height: 1.6;
  }

  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: "Roboto", sans-serif;
  }
`;

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}
const history = createBrowserHistory();
middlewares.push(routerMiddleware(history));

const store = createStore(
  connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

const ReduxApp = () => (
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <ConnectedRouter history={history}>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={ChoosePersonaContainer} />
          <Route exact path="/methodology" component={InfoPage} />
          <Route exact path="/about" component={InfoPageAbout} />
          <Route
            exact
            path="/persona/:personaName"
            component={PersonaPageContainer}
          />
        </Switch>
=======
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={ChoosePersonaContainer} />
            <Route exact path="/methodology" component={InfoPage} />
            <Route exact path="/about" component={InfoPage} />
            <Route
              exact
              path="/persona/:personaName"
              component={PersonaPageContainer}
            />
          </Switch>
        </ScrollToTop>
>>>>>>> 9c7f38ba1eecb4f94bc5ce5455a40a937a9caf9a
      </ConnectedRouter>
    </Provider>
  </React.Fragment>
);

ReactDOM.render(<ReduxApp />, document.getElementById("root"));
registerServiceWorker();
