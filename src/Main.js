import React from 'react';
import {HashRouter, Switch,  exact, Route, BrowserRouter } from 'react-router-dom';

import Home2023 from './2023/App2023.js';
import CallForPapers from './2023/CallForPapers';
import Organisers from './2023/Organisers';
import ImportantDates from './2023/ImportantDates';
import TechnicalCommitee from './2023/TechincalCommitee';
import Program from './2023/Program';
import Registration from './2023/Registration';
import Venue from './2023/Venue';
import TopContent from './2023/TopContent';
import StudentCompetition from './2023/StudentCompetition';
import Instructions from './2023/Instructions';
import Home2021 from './2021/App2021.js';
import Navbar2023 from './2023/App2023';
import Footer2023 from './2023/Footer.js';


const Main = () => {
  return (

    
    
  <Switch>
           <Route exact path="/">
            <Navbar2023/>
            <TopContent/>
            <Footer2023/>
          </Route>
          <Route exact path="/callforpapers">
          <Navbar2023/>
            <CallForPapers/>
            <Footer2023/>
          </Route>
          {/* <Route exact path="/studentcompetition">
          <StudentCompetition/>
        </Route> */}
           <Route exact path="/importantdates">
           <Navbar2023/>
            <ImportantDates/>
            <Footer2023/>
          </Route>
          <Route exact path="/technicalcommitee">
          <Navbar2023/>
           <TechnicalCommitee/>
           <Footer2023/>
         </Route>
         <Route exact path="/organisers">
         <Navbar2023/>
          <Organisers/>
          <Footer2023/>
        </Route>
          <Route exact path="/program">
          <Navbar2023/>
          <Program/>
          <Footer2023/>
        </Route>

          {/* <Route exact path="/registration">
          <Registration/>
        </Route> */}

        <Route exact path="/location">
        <Navbar2023/>
          <Venue/>
          <Footer2023/>
        </Route>

        <Route exact path="/instructionsforauthors">
        <Navbar2023/>
          <Instructions/>
          <Footer2023/>
        </Route>
        <Route exact path='/prev/2021*'>
          <Home2021/>

        </Route>




        </Switch>
              
  );
}

export default Main;