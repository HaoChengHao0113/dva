import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from '@components/layout';
import Three from '@routes/three';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/three" component={Three}></Route>
        <Route path="/" component={Layout}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
