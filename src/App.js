import "tailwindcss/dist/base.css";
// import "styles/globalStyles.css";
import "../src/styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import Login from '../src/components/auth/Login.js';
import SignUp from '../src/components/auth/SignUp.js';
import MainLayout from "../src/components/dashboard/components/Layout/MainLayout";
// import './styles/reduction.scss';
import DashboardPage from "../src/components/dashboard/pages/DashboardPage";
import FilesComponent from "../src/components/dashboard/components/added/FilesComponent";


import SaaSProductLandingPage from "../src/demos/SaaSProductLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {


 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SaaSProductLandingPage} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/signup" component={SignUp} />
          
        <MainLayout >
             
              <React.Suspense>
                <Route exact path="/dash" component={DashboardPage} />
                <Route exact path="/dash/files/:title/:id" component={FilesComponent} />
              </React.Suspense>
          </MainLayout>


      </Switch>
    </Router>

  );
}

export default App;

