import React from 'react';
import ScrollIntoView from "../components/ScrollIntoView";
import CallForPapers from './CallForPapers';
import Organisers from './Organisers';
import ImportantDates from './ImportantDates';
import TechnicalCommitee from './TechincalCommitee';
import Program from './Program';
import Registration from './Registration';
import Venue from './Venue';
import TopContent from './TopContent';
import StudentCompetition from './StudentCompetition';
import Instructions from './Instructions';
import './App2023.css';
import hwLogo from './assets/heriot-watt.jpg';
import Home2021 from '../2021/App2021';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";


class Home2023 extends React.Component {
  componentDidMount() {
  document.title = 'ACS';
}
   render() {
      return (
        
         <div>
          

            <TopContent/>

         </div>
      );
   }
}


class Navbar2023 extends React.Component {
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
        <div>
          
<div id = "testing1">

<nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg " style={this.state.bgColor}>
    <div class="container-fluid">
        <Link class="navbar-brand" to="/">ACS23</Link>
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
                {/* <li class="nav-item">
                   <Link class="nav-link scroll-link"  to="/studentcompetition">Student Competition</Link>
                </li> */}
                <li class="nav-item">
                   <Link class="nav-link scroll-link"  to="/instructionsforauthors">Instructions for Authors</Link>
                </li>
                 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Committees
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <li class="nav-item">
            <Link class="dropdown-item"  to="/organisers">Organisers</Link>
        </li>

          <li class="nav-item">
              <Link class="dropdown-item"  to="/technicalcommitee">Technical Committee</Link>
          </li>

        </div>
          </li>

                <li class="nav-item">
                    <Link class="nav-link scroll-link"  to="/importantdates">Important Dates</Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link scroll-link my-link"  to="/program">Program</Link>
                </li>
                     {/* <li class="nav-item">
                     <Link class="nav-link scroll-link"  to="/registration">Registration</Link>
                </li> */}
                                      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Venue
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <li class="nav-item">
            <Link class="dropdown-item"  to="/location">How to get here</Link>
        </li>
        <li class="nav-item">
            <Link class="dropdown-item"  to={{ pathname:"https://www.tripadvisor.com/Tourism-g295424-Dubai_Emirate_of_Dubai-Vacations.html" }}  target="_blank">Local Attractions</Link>
        </li>
    
        </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Prev Years
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <li class="nav-item">
       
          <Link class="dropdown-item"  to="/prev/2021">2021</Link>
       
        </li>

    
        </div>
          </li>

            </ul>
        </div>
    </div>
</nav>
</div>




  </div>
      );

   }
}

export default Navbar2023;

