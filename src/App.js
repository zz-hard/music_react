// import logo from './logo.svg';
import React, { Suspense, PureComponent } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import $ from 'jquery';
import './App.scss';
import Loading from './roading';
import 'element-theme-default';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {
            routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={props => <route.component {...props} routes={route.routes} />}
              />
            ))
          }
        </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
