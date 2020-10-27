import "./assets/styles/bootstrap.min.css";
import "./assets/styles/fontawesome.min.css";
import "./assets/styles/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "./assets/styles/style.scss";
import "./assets/styles/responsive.css";

//import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from "react";

import { Route, Switch } from "react-router-dom";
////import loadable from "@loadable/component";
import FF from "./layout/footer";
import "./scss/style.scss";
import css from "./App.module.scss";
//const Footer = loadable(() => import("./layout/footer/Footer"));
const App: React.FC<any> = () => {
  return (
    <div className={css.wrapper}>
      <FF />
      <Switch>
        <Route render={() => "404!!!"} />
      </Switch>
    </div>
  );
};

export default App;
