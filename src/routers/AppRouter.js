import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import PageNotFound from '../components/PageNotFound.js';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route 
              path="/"
              component={HomePage}
              exact={true}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default AppRouter;