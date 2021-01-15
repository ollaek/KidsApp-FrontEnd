import React, * as react from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Home = react.lazy(() => import("./home/Home"));
const Character = react.lazy(() => import("./characterCreation/index"));

const App = () => (
  <Router >
    <react.Suspense fallback={<div>Loading ...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Character} />

        <Redirect to="/" />
      </Switch>
    </react.Suspense>
  </Router>
);

export default App;
