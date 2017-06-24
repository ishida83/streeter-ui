import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Search from './Search/Search';
import Saved from './Saved/Saved';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Saved} />
    <Route path="/home" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/saved" component={Saved} />
  </Switch>
);

export default Routes;
