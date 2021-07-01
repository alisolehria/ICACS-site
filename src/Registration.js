import React from 'react';
import PageCarousel from './PageCarousel';
class Registration extends React.Component {
 
    componentDidMount() {
      document.title = "Registration";
    }
    render(){
      return (
        <div>
             <PageCarousel title="Registration"/>
          
             <div class="container">
  <div id = "call" class = "callPapers">


<div class = "row">
    <h3>Fees</h3>
    </div>
    <ul>
        <li>USD0 (FREE) - Students and Academics</li>
        <li>USD100 - Industrial delegates</li>
    </ul>
    </div></div>
         
        </div>
        
            
        );
      }
    
  }

  export default Registration;