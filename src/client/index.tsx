import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { configureStore } from "../shared/store";
import App from "../shared/App";
import IntlProvider from "../shared/i18n/IntlProvider";
import createHistory from "../shared/store/history";
const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
  window.store ||
  configureStore({
    initialState: window.__PRELOADED_STATE__,
  });

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <IntlProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </IntlProvider>
    </Router>
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();
  }

  if (!window.store) {
    window.store = store;
  }
}

/**
 import * as React from "react";
import loadable, { loadableReady } from "@loadable/component";
const { Provider } = loadable(() => import("react-redux"));
const { HelmetProvider } = loadable(() => import("react-helmet-async"));
const { configureStore } = loadable(() => import("../shared/store"));
const IntlProvider = loadable(() => import("../shared/i18n/IntlProvider"));
const createHistory = loadable(() => import("../shared/store/history"));
const { hydrate } = loadable(() => import("react-dom"));

const history = createHistory();
// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
  window.store ||
  configureStore({
    initialState: window.__PRELOADED_STATE__,
  });

loadableReady(() => {
  hydrate(
    <Provider store={store}>
      {import("react-router-dom").then(({ Router }) => (
        <Router history={history}>
          <IntlProvider>
            <HelmetProvider>
              {import("../shared/App").then(({ default: App }) => (
                <App />
              ))}
            </HelmetProvider>
          </IntlProvider>
        </Router>
      ))}
    </Provider>,

    document.getElementById("app")
  );
});

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();
  }

  if (!window.store) {
    window.store = store;
  }
}

 */
