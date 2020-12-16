import React, * as react from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const Home = react.lazy(() => import("./Home"));

const App = () => (
  <Router>
      <react.Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Redirect to="/" />
        </Switch>
      </react.Suspense>
  </Router>
);

export default App;
