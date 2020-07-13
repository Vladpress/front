import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Protected from './components/Protected/Protected';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { routes } from '../routes.js'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path='/protected' component={Protected} />             
          {routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />)}
        </Switch>           
      </Router>
    </div>
  );
}
 