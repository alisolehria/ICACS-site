import React from 'react';
import PageCarousel from './PageCarousel';
import map from "./../assets/map.png";
import email from "./../assets/email.png"

class Venue extends React.Component {
   
    componentDidMount() {
      document.title = "How to get here";
    }
    render(){
      return (
        <div>
             <PageCarousel title="How to get here"/>
          
             <div class="container">
  <div id = "call" class = "callPapers">
        
  <h1>Contact Us</h1>
  <br/>
<div class="row">
  <div class="col-sm">
  
      <h3 class="text-center">Location</h3>
      <a href="https://goo.gl/maps/SL44kU9mrb7vCesT9" target="_blank">
      Google Maps</a>
      </div>
      <div class="col-sm">
            <h3 class="text-center">Contact</h3>
            <h6 class="text-center">Heriot-Watt University Dubai, UAE</h6>
            <img class="mx-auto d-block" src={email} alt="email"   width="35%" heigh="35%" />
              </div>
              </div>

            
          
            
           
         <br/><br/>
  
    </div></div>
         
        </div>
        
            
        );
      }
    
  }


  export default Venue;