import React from 'react';
import ReactDOM from 'react-dom'
import ScrollableAnchor from 'react-scrollable-anchor'
import DateCountdown from 'react-date-countdown-timer';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
   render() {
      return (
         <div>
            <Navbar/>

            <TopContent/>
            <CallForPapers/>
            <PreviousConferences/>
            <TechnicalCommitee/>
            <Organizers/>
            <PreviousListings/>
         </div>
      );
   }
}


class Navbar extends React.Component {
   constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state ={
      bgColor :  { background: "rgba(0, 0, 0, 0.5)"}
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
      bgColor : { background: "rgba(1, 1, 1, 1)"}
    }
    );
  }



   render() {
      return (
<div id = "testing1">
<nav class="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg" style={this.state.bgColor}>
    <div class="container">
        <a class="navbar-brand" href="#top-content">Conference Name</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            
                <li class="nav-item">
                    <a class="nav-link scroll-link" href="#call">Call for Papers</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link scroll-link" href="#prevConf">Previous Conferences</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link scroll-link" href="#tech">Technical Commitee</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link scroll-link" href="#organizers">Organizers</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link scroll-link" href="#prevList">Previous Listings</a>
                </li>

            </ul>
        </div>
    </div>
</nav>
</div>
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
                <h1 class="wow fadeInLeftBig">Conference Name 2020</h1>
                <div class="description wow fadeInLeftBig">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ex id augue bibendum faucibus. Vestibulum felis nibh, varius ut ultricies sed, auctor eget dui. Vivamus justo ex, imperdiet quis dui id, commodo pharetra purus. Aenean posuere id tellus vel commodo. Vivamus at nulla quam. Donec turpis mauris, gravida vel erat eu, blandit dictum lacus. In dictum nulla nec lorem tempor, non porta lacus vehicula.
                    </p>
                </div>
         
            
   </div>

   </div>
   <div id = "row" class="text">
 <h1>Time to Conference</h1>
</div>
           <div id = "countdown">
   <DateCountdown dateTo='January 01, 2021 00:00:00 GMT+03:00' />

   </div>
   </div>

 </div>
            
      );
  }
}


class CallForPapers extends React.Component {
  render(){
    return (
         <ScrollableAnchor id={'call'}>
         <section id="dark-bg">
      <div class = "container">
<div id = "call">

      <h2>Call for Papers</h2>

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

export default App;