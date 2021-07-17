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
    <h3>Registration Fees</h3>
    </div>
    <ul>
        <li>USD0 (FREE) for paper and poster authors </li>
        <li>USD100 (AED370) for industrial delegates</li>
    </ul>
    <div class = "row">
    <h3>Registration Link</h3>
    </div>
    <p>Coming Soon</p>
    </div>
    </div>

 
    </div>
         
     
            
        );
      }
    
  }

  export default Registration;