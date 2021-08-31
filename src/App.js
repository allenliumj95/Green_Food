import { Fragment, useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./Auth/Layout/Layout";
import ChangePassword from "./Auth/Password/ChangePassword";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import OrderPage from "./pages/OrderPage";
import WelcomePage from "./pages/WelcomePage";

import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Layout>
            {!authCtx.isLoggedIn && <LoginPage />}
            {authCtx.isLoggedIn && <WelcomePage />}
          </Layout>
        </Route>

        {!authCtx.isLoggedIn && (
          <Route path="/Login">
            <Layout>
              <LoginPage />
            </Layout>
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/SignUp">
            <Layout>
              <SignUpPage />
            </Layout>
          </Route>
        )}

        {authCtx.isLoggedIn && (
          <Route path="/Order">
            <OrderPage />
          </Route>
        )}

        <Route path="/ChangePassword">
          <Layout>
            {authCtx.isLoggedIn && <ChangePassword />}
            {!authCtx.isLoggedIn && <Redirect to="/Login" />}
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
