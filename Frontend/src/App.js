import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";

import HomePage from "./pages/HomePage";
// import axios from 'axios';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomePage />
          </Layout>
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
