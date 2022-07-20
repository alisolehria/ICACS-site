import React from 'react';
import {BrowserRouter, Switch, Route, exact } from 'react-router-dom';

import Home2023 from './2023/App2023.js';
import ImportantDates from './2023/ImportantDates.js';
import Home2021 from './2021/App2021.js';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        
        {/* <Route exact path='/importantdates' component={ImportantDates}></Route> */}
        <Route exact path='/prev/2021/*' component={Home2021}></Route>
        <Route exact path='/*' component={Home2023}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;