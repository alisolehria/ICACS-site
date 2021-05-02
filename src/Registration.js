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
          <h1>Under Construction</h1>
    </div></div>
         
        </div>
        
            
        );
      }
    
  }

  export default Registration;