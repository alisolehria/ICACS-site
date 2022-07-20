import React from 'react';


import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";
import Home2023 from './2023/App2023.js';
import ImportantDates from './2023/ImportantDates.js';
import Home2021 from './2021/App2021.js';





function App() {
  return (
    <div className="App">


      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        
        {/* <Route exact path='/importantdates' component={ImportantDates}></Route> */}
        
        <Route  path='/*' component={Home2023}></Route>
      </Switch>
    
  

    </div>
  );
}

export default App;
