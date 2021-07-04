import React from 'react';
import ScrollIntoView from "./components/ScrollIntoView";
import CallForPapers from './CallForPapers';
import Organisers from './Organisers';
import ImportantDates from './ImportantDates';
import TechnicalCommitee from './TechincalCommitee';
import Program from './Program';
import Registration from './Registration';
import Venue from './Venue';
import TopContent from './TopContent';
import StudentCompetition from './StudentCompetition';
import './App.css';
import MetaTags from 'react-meta-tags';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Home extends React.Component {
  componentDidMount() {
  document.title = 'ACS';
}
   render() {
      return (
        
         <div>
            <div className="wrapper">
          <MetaTags>
            <meta name="description" content="The International Conference on Applied CyberSecurity (ACS) aims to bring together researchers, practitioners, developers and students in the field of cybersecurity to exchange novelties, experience and ideas." />
            <meta property="og:title" content="International Conference on Applied CyberSecurity (ACS) 2021" />
            {/* <meta property="og:image" content="path/to/image.jpg" /> */}
          </MetaTags>
      
        </div>

            <TopContent/>

         </div>
      );
   }
}


class Navbar extends React.Component {
   constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state ={
      bgColor :  { background: "rgba(0, 0, 0, 0.8)"}
    };
  }


   componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    //this.state(bgColor : { background: "rgba(0, 0, 0, 1)"})
    this.setState({
      bgColor : { background: "rgba(0, 0, 0, 0.8)"}
    }
    );
  }



   render() {
      return (
           <Router>
<div id = "testing1">
<nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg " style={this.state.bgColor}>
    <div class="container-fluid">
        <Link class="navbar-brand" to="/">ICACS 2021</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ml-auto">
                              <li class="nav-item">
             <Link class="nav-link scroll-link"  to="/">Home</Link>
                </li>
                <li class="nav-item ">
                   <Link class="nav-link scroll-link"  to="/callforpapers">Call for Papers</Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link scroll-link"  to="/studentcompetition">Student Competition</Link>
                </li>
                 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Commitees
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li class="nav-item">
            <Link class="dropdown-item"  to="/organisers">Organisers</Link>
        </li>

          <li class="nav-item">
              <Link class="dropdown-item"  to="/technicalcommitee">Techincal Commitee</Link>
          </li>

        </div>
          </li>

                <li class="nav-item">
                    <Link class="nav-link scroll-link"  to="/importantdates">Important Dates</Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link scroll-link my-link"  to="/program">Program</Link>
                </li>
                     <li class="nav-item">
                     <Link class="nav-link scroll-link"  to="/registration">Registration</Link>
                </li>
                                      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Venue
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li class="nav-item">
            <Link class="dropdown-item"  to="/location">How to get here</Link>
        </li>
        <li class="nav-item">
            <Link class="dropdown-item"  to="/location">Local Attractions</Link>
        </li>
    
        </div>
          </li>

            </ul>
        </div>
    </div>
</nav>
</div>

    <ScrollIntoView>
  <Switch>
           <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/callforpapers">
            <CallForPapers/>
          </Route>
          <Route exact path="/studentcompetition">
          <StudentCompetition/>
        </Route>
           <Route exact path="/importantdates">
            <ImportantDates/>
          </Route>
          <Route exact path="/technicalcommitee">
           <TechnicalCommitee/>
         </Route>
         <Route exact path="/organisers">
          <Organisers/>
        </Route>
          <Route exact path="/program">
          <Program/>
        </Route>

          <Route exact path="/registration">
          <Registration/>
        </Route>

        <Route exact path="/location">
          <Venue/>
        </Route>




        </Switch>
              </ScrollIntoView>
  </Router>

      );

   }
}






















export default Navbar;

