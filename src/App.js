import React from 'react';
import ReactDOM from 'react-dom'
import ScrollableAnchor from 'react-scrollable-anchor'
import DateCountdown from 'react-date-countdown-timer';
import logo from './logo.svg';
import carouselPic1 from './assets/top-content-new.jpg';
import ScrollIntoView from "./components/ScrollIntoView";
import './App.css';
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
<nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg" style={this.state.bgColor}>
    <div class="container">
        <Link class="navbar-brand" to="/">ICACS 2021</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                              <li class="nav-item">
             <Link class="nav-link scroll-link"  to="/">Home</Link>
                </li>
                <li class="nav-item">
                   <Link class="nav-link scroll-link"  to="/callforpapers">Call for Papers</Link>
                </li>
                 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Commitee
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Organizers</a>
          <a class="dropdown-item" href="#">Technical Commitee</a>
        </div>
          </li>
  
                <li class="nav-item">
                    <Link class="nav-link scroll-link"  to="/importantdates">Important Dates</Link>
                </li>
                 <li class="nav-item">
                    <a class="nav-link scroll-link" href="#prevList">Program</a>
                </li>
                     <li class="nav-item">
                    <a class="nav-link scroll-link" href="#prevList">Registration</a>
                </li>
                                      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Venue
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">How to get here</a>
          <a class="dropdown-item" href="#">Local Attractions</a>
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
           <Route exact path="/importantdates">
            <ImportantDates/>
          </Route>
          
        </Switch>
              </ScrollIntoView>
  </Router>
      );
   }
}


class TopContent extends React.Component {
  render(){
    return (
      
      <div class="top-content" id="top-content">
        <div class="container">
 
        <div class="row">
            <div class="col-md-8 offset-md-2 text">
                <h1 class="wow fadeInLeftBig"> International Conference on Applied CyberSecurity (ACS) 2021</h1>
                <h3 class="conference_date"> 13-14 November 2021 | Dubai, UAE</h3>
                <div class="description wow fadeInLeftBig">
                    <p>
The International Conference on Applied CyberSecurity (ACS) aims to bring together researchers, practitioners, developers and students in the field of cybersecurity to exchange novelties, experience and ideas. </p>

<p>We invite original unpublished papers from academics, government and industry practitioners as well as research students on their innovations in both theory and practice of cybersecurity. Papers could be on original designs and concepts, techniques and mechanisms, as well as field applications. </p>

<p>“Submitted papers must not substantially overlap with papers that have been published or that are simultaneously submitted to a journal or a conference/workshop with proceedings.”                     </p>
                </div>
         
            
   </div>

   </div>
   <div id = "row" class="text">
 <h1>Time to Conference</h1>
</div>
           <div id = "countdown">
   <DateCountdown dateTo='November 13, 2021 00:00:00 GMT+03:00' />

   </div>
   </div>

 </div>
            
      );
  }
}


class PageCarousel extends React.Component{
  
  render(){
    return (
     <div class="home_container" id="top-content">
        <div class="container">
 
        <div class="row">
            <div class="col-md-8 offset-md-2 text">
                <h1 class="wow fadeInLeftBig">    <span style={{color: 'white'}}>{this.props.title}</span></h1>
             
   </div>
</div>
</div>
 </div>
      )
  }
}


class CallForPapers extends React.Component {
    componentDidMount() {
    document.title = "Call For Papers";
  }
  render(){
    return (  
<div>
       <PageCarousel title="Call For Papers"/>
         <section id="dark-bg">
      <div class = "container">
<div id = "call" class = "callPapers">

   
    
      <div class = "row">
  <h3>Conference Topics</h3>
  </div>
  <div class ="row">
        <p>Topics of interests are, but not limited to: </p>
        <ul>
            <li>Machine learning applications to security and data-driven security</li>
            <li>AI security </li>
            <li>Network and wireless security </li>
            <li>Malware and unwanted software</li>
            <li>Digital forensics & biometrics (multimedia security, mobile, watermarking & data hiding, etc.)</li>
            <li>Information Security Management (governance, risk management, security policies, compliance, operations, incident management, usability & human factors, etc.) </li>
            <li>Access management</li>
            <li>Authentication and authorization</li>
            <li>Intrusion and anomaly detection and prevention </li>
            <li>Threat Modelling, Vulnerability Assessment and Security Assessment</li>
            <li>Web security </li>
            <li>Anonymity & Privacy</li>
            <li>System and OS security</li>
            <li>Cryptography applications </li>
            <li>5G security</li>
            <li>Social network security</li>
            <li>Infrastructure security</li>
            <li>Source code and binaries security</li>
            <li>Secure computer architectures</li>
            <li>IT security laws and policies</li>
            <li>Denial-of-service attacks and countermeasures </li>
            <li>Anonymity and privacy</li>
            <li>Security awareness, education and training</li>
            <li>Application security </li>
            <li>Blockchains and distributed ledger security </li>
            <li>Cloud security </li>
            <li>Cyber physical systems security </li>
            <li>Distributed systems security </li>
            <li>Embedded systems security </li>
            <li>Mobile security and privacy </li>
            <li>Internet of Things Security</li>
            <li>Security and privacy policies and metrics</li>
            <li>Security architectures</li>
            <li>Smart Cities Security</li>
      </ul>
</div>
<div class = "row">
  <h3>Conference Tracks</h3>
   </div>
   <div class = "row">
     <p>The above topics are organized into tracks as follows:</p>
     <ul>
     <li><h4>Industry 4.0 Security & AI</h4>
     Machine learning applications to security and data-driven security, AI security, 5G security, Internet of Things Security, Cloud security, Operational technology security, Cyber physical systems security </li>
     <li><h4>Ethical hacking and Digital forensics</h4>Malware and unwanted software, Source code and binaries security, Vulnerability Assessment and Security Assessment, multimedia security, mobile, watermarking & data hiding, denial-of-service attacks and countermeasures</li>
     <li><h4>Information Security Management</h4>Governance, risk management, security policies, compliance, operations, incident management, usability & human factors, Security and privacy policies and metrics, Threat Modelling, IT security laws and policies, security awareness, education and training, access management</li>
     <li><h4>Secure Infrastructure</h4>
     Network and wireless security, smart cities security, web security, mobile security & privacy, distributed systems security, anonymity and privacy, intrusion and anomaly detection and prevention, OS security, infrastructure security, authentication and authorization, biometrics, secure computer architectures, blockchains and distributed ledger security, social network security, application security, cryptography applications, security architectures, embedded systems security</li>
     </ul>
    </div>
<div class = "row">
  <h3>Paper Preparation</h3> 
   </div>
<div class = "row">
(<a href= "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=106249&copyownerid=152894" target="_blank">http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=106249&copyownerid=152894)</a>

“The technical tracks shall accept regular papers of 6 pages maximum (2 additional pages allowed but at an extra charge in the final submission), 10pt font double column in IEEE format. Authors must present novel perspectives within the general scope of the conference.” 
“All papers must strictly follow the IEEE Xplore paper template from the following link:  
<a href = "https://www.ieee.org/conferences/publishing/templates.html" target = "_blank">https://www.ieee.org/conferences/publishing/templates.html</a> Authors Kit:  <a href = "https://ieeeauthorcenter.ieee.org/" target = "_blank">https://ieeeauthorcenter.ieee.org/</a>  
” 


</div>

<div class = "row">
  <h3>Paper Submission</h3> 
   </div>
<div class = "row">
<p>We use EDAS/EasyChair for submission.   
“Authors need to:  </p>

<ol>
  <li>Create an account (if not already registered) with EDAS at <a href = "https://confName.edas.info/" target = "_blank">https://confName.edas.info/</a> </li> 
  <li>Submission link: <a href = "https://edas.info/newPaper.php?c=27554" target = "_blank"> https://edas.info/newPaper.php?c=27554 </a></li>
</ol>
</div>
</div>
   
</div> 

</section>
 </div>
      );
  }
}

class ImportantDates extends React.Component {
    componentDidMount() {
    document.title = "Important Dates";
  }
  render(){
    return (  
<div>
<PageCarousel title="Important Dates"/>
<div class="container">
<div id = "call" class = "callPapers">
<h2> Conference: 13-14 November 2021 </h2>
<div class="row">

<div class="col">
<div class="row" id="dateHeader">

<h3>Paper Submission Dates</h3>
</div>

<div class="event">
<p>Conference paper/ contribution deadline</p>
<h2>1st June 2021</h2>
</div>


<div class="event">
<p>Poster/Abstract Submission Date</p>
<h2>20th June 2021</h2>
</div>

<div class="event">
<p>Conference paper notification</p>
<h2>15th July 2021</h2>
</div>


<div class="event">
<p>Camera Ready Submission (Strict)</p>
<h2>25th July, 2021</h2>

</div>

</div>

<div class="col">
<div class="row">

<h3>Workshop/Special Session Dates</h3>
</div>
<div class="event">
<p>Workshop/Special Session Proposal</p>
<h2>5th May, 2021</h2>
</div>


<div class="event">
<p>Notification of Workshop/Special Acceptance</p>
<h2>5th June, 2021</h2>
</div>

<div class="event">
<p>Workshop Final Information and Program Committee:</p>
<h2>15th June, 2021</h2>
</div>


<div class="event">
<p>Deadline for paper submission</p>
<h2>5th July, 2021</h2>

</div>


<div class="event">
<p>Notification of Acceptance</p>
<h2>25th July, 2021</h2>

</div>

<div class="event">
<p>Camera ready paper and registration (Strict)</p>
<h2>30th July, 2021</h2>

</div>






</div>



</div>

 </div>
 </div>
 </div>
      );
  }
}



class PreviousConferences extends React.Component {
  render(){
    return (
         <ScrollableAnchor id={'prevConf'}>
         
      <div class = "container">
<div id = "call">

      <h2>Previous Conferences</h2>

      <div class = "row">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget sem in nunc tempor iaculis sit amet ullamcorper neque. Sed lectus ex, vulputate vel ultricies vitae, gravida vel quam. Nunc aliquet fermentum sodales. Quisque mollis sit amet eros a euismod. Praesent non turpis volutpat, elementum quam ac, lobortis turpis. Nam nec ultrices turpis, volutpat sodales nibh. Nam tristique et libero quis varius. Pellentesque pulvinar enim in dolor venenatis, sit amet iaculis tellus malesuada. Phasellus eget pellentesque enim, at iaculis libero. Vestibulum semper, enim et semper tempus, turpis eros maximus sapien, sit amet semper augue nunc quis nisl.

        </p><p>Ut tristique diam hendrerit turpis ullamcorper, quis sagittis urna tempus. Duis egestas libero a ex fermentum, vitae fermentum libero interdum. Sed tempor libero libero. Suspendisse ut volutpat eros, facilisis dapibus enim. Integer varius, velit eget dignissim faucibus, dui orci accumsan elit, id tincidunt enim purus et mi. Vivamus pellentesque egestas tortor et varius. Integer vehicula risus quis odio aliquet tincidunt. Fusce euismod eros purus, ac bibendum dui tempor ac. In id nisi lorem.

        Vivamus elementum neque et mi tristique, at porttitor turpis mattis. Proin id urna magna. Curabitur egestas dolor eget faucibus suscipit. Fusce sit amet blandit ante. In a metus at nisi dictum euismod quis eget magna. Etiam eu ex justo. Duis a nulla et nibh auctor commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
      </div>
</div> 
</div>
            </ScrollableAnchor>   
      );
  }
}


class TechnicalCommitee extends React.Component {
  render(){
    return (
         <ScrollableAnchor id={'tech'}>
  <section id="dark-bg">
      <div class = "container">
<div id = "call">

      <h2>Technical Commitee</h2>

      <div class = "row">
      <div class = "col-sm-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget sem in nunc tempor iaculis sit amet ullamcorper neque. Sed lectus ex, vulputate vel ultricies vitae, gravida vel quam. Nunc aliquet fermentum sodales. Quisque mollis sit amet eros a euismod. Praesent non turpis volutpat, elementum quam ac, lobortis turpis. Nam nec ultrices turpis, volutpat sodales nibh. Nam tristique et libero quis varius. Pellentesque pulvinar enim in dolor venenatis, sit amet iaculis tellus malesuada. Phasellus eget pellentesque enim, at iaculis libero. Vestibulum semper, enim et semper tempus, turpis eros maximus sapien, sit amet semper augue nunc quis nisl.
        </p></div>
           <div class = "col-sm-4">
        <p>
        Ut tristique diam hendrerit turpis ullamcorper, quis sagittis urna tempus. Duis egestas libero a ex fermentum, vitae fermentum libero interdum. Sed tempor libero libero. Suspendisse ut volutpat eros, facilisis dapibus enim. Integer varius, velit eget dignissim faucibus, dui orci accumsan elit, id tincidunt enim purus et mi. Vivamus pellentesque egestas tortor et varius. Integer vehicula risus quis odio aliquet tincidunt. Fusce euismod eros purus, ac bibendum dui tempor ac. In id nisi lorem.
 </p></div>
 <div class = "col-sm-4">
        <p>
        Vivamus elementum neque et mi tristique, at porttitor turpis mattis. Proin id urna magna. Curabitur egestas dolor eget faucibus suscipit. Fusce sit amet blandit ante. In a metus at nisi dictum euismod quis eget magna. Etiam eu ex justo. Duis a nulla et nibh auctor commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
         </p></div>
      </div>
</div> 
</div>
</section>
            </ScrollableAnchor>   
      );
  }
}


class Organizers extends React.Component {
  render(){
    return (
         <ScrollableAnchor id={'organizers'}>
          
      <div class = "container">
<div id = "call">

      <h2>Organizers</h2>

      <div class = "row">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget sem in nunc tempor iaculis sit amet ullamcorper neque. Sed lectus ex, vulputate vel ultricies vitae, gravida vel quam. Nunc aliquet fermentum sodales. Quisque mollis sit amet eros a euismod. Praesent non turpis volutpat, elementum quam ac, lobortis turpis. Nam nec ultrices turpis, volutpat sodales nibh. Nam tristique et libero quis varius. Pellentesque pulvinar enim in dolor venenatis, sit amet iaculis tellus malesuada. Phasellus eget pellentesque enim, at iaculis libero. Vestibulum semper, enim et semper tempus, turpis eros maximus sapien, sit amet semper augue nunc quis nisl.

        Ut tristique diam hendrerit turpis ullamcorper, quis sagittis urna tempus. Duis egestas libero a ex fermentum, vitae fermentum libero interdum. Sed tempor libero libero. Suspendisse ut volutpat eros, facilisis dapibus enim. Integer varius, velit eget dignissim faucibus, dui orci accumsan elit, id tincidunt enim purus et mi. Vivamus pellentesque egestas tortor et varius. Integer vehicula risus quis odio aliquet tincidunt. Fusce euismod eros purus, ac bibendum dui tempor ac. In id nisi lorem.

        Vivamus elementum neque et mi tristique, at porttitor turpis mattis. Proin id urna magna. Curabitur egestas dolor eget faucibus suscipit. Fusce sit amet blandit ante. In a metus at nisi dictum euismod quis eget magna. Etiam eu ex justo. Duis a nulla et nibh auctor commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
      </div>
</div> 
</div>

            </ScrollableAnchor>   
      );
  }
}



class PreviousListings extends React.Component {
  render(){
    return (
         <ScrollableAnchor id={'prevList'}>
                  <section id="dark-bg">
      <div class = "container">
<div id = "call">

      <h2>Previous Listings</h2>

      <div class = "row">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget sem in nunc tempor iaculis sit amet ullamcorper neque. Sed lectus ex, vulputate vel ultricies vitae, gravida vel quam. Nunc aliquet fermentum sodales. Quisque mollis sit amet eros a euismod. Praesent non turpis volutpat, elementum quam ac, lobortis turpis. Nam nec ultrices turpis, volutpat sodales nibh. Nam tristique et libero quis varius. Pellentesque pulvinar enim in dolor venenatis, sit amet iaculis tellus malesuada. Phasellus eget pellentesque enim, at iaculis libero. Vestibulum semper, enim et semper tempus, turpis eros maximus sapien, sit amet semper augue nunc quis nisl.

        Ut tristique diam hendrerit turpis ullamcorper, quis sagittis urna tempus. Duis egestas libero a ex fermentum, vitae fermentum libero interdum. Sed tempor libero libero. Suspendisse ut volutpat eros, facilisis dapibus enim. Integer varius, velit eget dignissim faucibus, dui orci accumsan elit, id tincidunt enim purus et mi. Vivamus pellentesque egestas tortor et varius. Integer vehicula risus quis odio aliquet tincidunt. Fusce euismod eros purus, ac bibendum dui tempor ac. In id nisi lorem.

        Vivamus elementum neque et mi tristique, at porttitor turpis mattis. Proin id urna magna. Curabitur egestas dolor eget faucibus suscipit. Fusce sit amet blandit ante. In a metus at nisi dictum euismod quis eget magna. Etiam eu ex justo. Duis a nulla et nibh auctor commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
      </div>
</div> 
</div>
</section>
            </ScrollableAnchor>   
      );
  }
}

export default Navbar;