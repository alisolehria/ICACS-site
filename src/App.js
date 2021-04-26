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
          <Route exact path="/technicalcommitee">
           <TechnicalCommitee/>
         </Route>
         <Route exact path="/organisers">
          <Organisers/>
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
  <h3>Conference Themes</h3>
   </div>
   <div class = "row">
     <p>The above topics are organized into themes as follows:</p>
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
  <h3>Paper Submission</h3>
   </div>
<div class = "row">
<p>Your submitted work can either be a full-length or a short paper.

Full-length papers are limited to 10 pages and present mature work.

Short papers are limited to 7 pages and contain intermediary results that might not have been extentsively evaluated.

Both types of papers are to be submitted to <a href = "https://easychair.org/conferences/?conf=acs21" target = "_blank"> EasyChair</a>.
</p>
</div>
<div class = "row">
  <h3>Student Competition</h3>
</div>
<div class = "row">
<p>
Graduate and post-graduate students are invited to submit their work. It could represent your degree project (graduation not earlier than April 2019), or a project you did while you are/were a student (graduation not earlier than April 2021). Posters use the A1 format. They will not be published in the conference proceedings.
</p>

<p> In order to participate, you will need to submit a one-page description of your project and its outcomes. If your submission is accepted, then you will be requested to submit a poster using the following template.
</p>
</div>
<div class = "row">
  <h3>Originality and Copyright</h3>
   </div>
<div class = "row">

<p>
All submitted work should be original; not previously or currently submitted for publication elsewhere.
</p>


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
<p>Paper submission deadline</p>
<h2>8th June 2021</h2>
</div>



<div class="event">
<p>Paper acceptance notification</p>
<h2>15th July 2021</h2>
</div>


<div class="event">
<p>Camera-ready submission (strict)</p>
<h2>25th July 2021</h2>

</div>

</div>

<div class="col">
<div class="row">

<h3>Poster Session Dates</h3>
</div>
<div class="event">
<p>Poster/Abstract Submission Date</p>
<h2>20th June 2021</h2>
</div>



<div class="event">
<p>Poster acceptance notification</p>
<h2>15th July 2021</h2>
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
  componentDidMount() {
  document.title = "Technical Commitee";
}
render(){
  return (
<div>
     <PageCarousel title="Techincal Commitee"/>
       <section id="dark-bg">
    <div class = "container">
<div id = "call" class = "callPapers">



    <div class = "row">

</div>
<div class ="row">

      <ul>
       <li>Dr. Sebastiano Panichella, Zurich University of Applied Science, Switzerland</li>
        <li>Prof. Abdelmadjid BouabdAllah, University of technology of compiegne, France</li>
        <li>Dr. Eduard Paul Enoiu, Mälardalen University, Sweden</li>
        <li>Dr. Mohamed Wiem Mkaouer, Rochester Institute of Technology, New York, United State</li>
<li>Dr. Arif Ali Khan, Nanjing University of Aeronautics and Astronautics, China</li>
<li>Dr. Rashid Naseem, Pak-Austria Fachhochschule Institute of Applied Sciences and Technology, Pakistan</li>
<li>Dr. Monther Aldwairi,  Zayed University, United Arab Emirates</li>
<li>Dr. Djedjiga Mouheb, University of Sharjah, United Arab Emirates</li>
<li>Dr. Mike Just, Heriot-Watt University, UK</li>
<li>Dr. Lilia Georgieva, Heriot-Watt University, UK</li>
<li>Dr. Samia Loucif, Zayed University</li>
<li>Prof. Mohammed Ould Khaoua, University of Blida, Algeria</li>
<li>Salih Ismail, Curtin University, UAE</li>
<li>Dr. Baber Majid Bhatti, University of South Australia.</li>
<li>Dr. Qasem Obeidat, University of Bahrain, Bahrain.</li>
<li>Dr. Nasir Mehmood Minhas, Blekinge Institute of Technology, Sweden</li>
<li>Dr. Muhammad Usman, Blekinge Institute of Technology, Sweden</li>
<li>Dr. Hajira Jabeen, University of Cologne, Germany</li>
<li>Dr. Babar Shah, Zayed University, United Arab Emirates</li>
<li>Dr. Adel Ammar, Prince Sultan University, Saudi Arabia</li>
<li>Dr. Fernando Moreira, Portucalense University, Portugal</li>
<li>Dr. Toqeer Ali Syed, Islamic University of Medina, Saudi Arabia</li>
<li>Dr. Abdul Rauf, RISE-Research Institute of Sweden in Vasteras,Sweden</li>
<li>Dr. Imran Ahmad Mughal, Institute of Management Sciences, Pakistan</li>
<li>Dr. Adnan Amin, Institute of Management Sciences, Pakistan</li>
<li>Dr. Awais Adnan, Institute of Management Sciences, Pakistan</li>
<li>Dr. Zahoor Jan, Islamia College University Peshawar, Pakistan</li>
<li>Dr. Salma Noor, Shaheed Benazir Bhutto Women University Peshawar, Pakistan</li>
<li>Dr. Neelam Gohar, Shaheed Benazir Bhutto Women University Peshawar, Pakistan</li>
<li>Dr. Imran Razzak, Deakin University, Australia</li>
<li>Dr. Muhammad Ramzan, Saudi Electronic University, Saudi Arabia</li>
<li>Dr. Gule Saman, Herriot-Watt University, UK</li>
<li>Dr. Irfan Mehmood, University of Bradford, UK</li>
<li>Dr. Khan Muhammad, Sejong University, South Korea</li>
<li>Dr. Asad Khattak, Zayed University, UAE</li>
<li>Dr. Wajahat Ali Khan, University of Derby, UK</li>
<li>Dr. Zunera Jalil, Air University Islamabad, Pakistan</li>
<li>Dr. Asad Habib, Kohat university of science and technology, Kohat,Pakistan</li>
<li>Dr. Ibrar Ahmad, University of Peshawar</li>
<li>Dr. Shah Nazir, University of Swabi, Pakistan</li>
<li>Dr. Jamil Ahmad, Islamia College University Peshawar, Pakistan</li>
<li>Dr. Zahid haleem, Ghulam Ishaq Institute of Engineering Sciences and Technology, Pakistan</li>
<li>Dr. Ahmad Khan, Comsats University Islamabad, Abbotabad Campus, Pakistan</li>
<li>Dr. Mohsin Bilal, University of Warwick, UK</li>
<li>Dr. Hassan Ali Khattak, Comsat University Islamabad, Pakistan</li>



    </ul>
</div>

</div>

</div>

</section>
</div>
    );


  }
}


class Organisers extends React.Component {
  componentDidMount() {
  document.title = "Organisers";
}
render(){
  return (
<div>
     <PageCarousel title="Organisers"/>
       <section id="dark-bg">
    <div class = "container">
<div id = "call" class="org">



  <h1>Honorary Chair</h1>
  <h2>Steve Gill, Heriot-Watt University, UAE</h2>


<h1>Chair</h1>
<h2>Hani Ragab, Heriot-Watt University, UAE</h2>


<h1>Co-chairs</h1>
<div class="multiple">

<h2>Abdelmadjid Bouabdallah, University of Technologie of Compiegne, France
<br/> Hadj Batatia, Heriot-Watt University, UAE</h2>
</div>
<h1>International Co-chair</h1>
<h2>Ahcene Bounceur, Bretagne Occidentale University, France</h2>

<h1>Publication Co-chairs</h1>
<h2>Neamat Elgayar, Heriot-Watt University, UAE
<br/>Mohammad Hamdan, Heriot-Watt University, UAE
</h2>
<h1>Poster Committee</h1>

<div class="multiple">

<h2>Adrian Turcanu, Heriot-Watt University, UAE
<br/>Hind Zantout, Heriot-Watt University, UAE
<br/>Smitha Kumar, Heriot-Watt University, UAE
</h2>
</div>




</div>

</div>

</section>
</div>
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
