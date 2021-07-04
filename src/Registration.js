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


        </div>
<div class = "row">
    <h1>Fees</h1>
    </div>
    <ul>
        <li>USD0 (FREE) for academcis and students </li>
        <li>USD100 (AED370) for industrial delegates</li>
    </ul>
    </div></div>
         
     
            
        );
      }
    
  }

  export default Registration;