import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./component/base/Layout";
import Books from "./pages/books";
import SignIn from "./pages/signIn";
import { useAppSelector } from "./containers/store";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Books}
              isAuthenticated={false}
            />

            <Route exact path="/sign-in" component={SignIn} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  useEffect(() => {
    console.log('PrivateRoute', isAuth)
  }, [isAuth])

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
