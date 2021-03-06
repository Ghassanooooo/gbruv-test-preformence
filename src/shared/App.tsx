// import React, { Suspense } from 'react';
import './assets/styles/bootstrap.min.css';
import './assets/styles/fontawesome.min.css';
import './assets/styles/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import './assets/styles/style.scss';
import './assets/styles/responsive.css';

//import 'semantic-ui-css/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import 'react-quill/dist/quill.snow.css';
import React from 'react';

import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import './scss/style.scss';
import './App.module.scss';
const Layout = loadable(() => import('./layout/Layout'));

const App: React.FC<any> = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" render={() => 'Pages'} />
            </Switch>
        </Layout>
    );
};

export default App;
