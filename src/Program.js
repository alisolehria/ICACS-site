import React from 'react';
import PageCarousel from './PageCarousel';
class Program extends React.Component {
 
    componentDidMount() {
      document.title = "Important Dates";
    }
    render(){
      return (
        <div>
             <PageCarousel title="Program"/>
          
             <div class="container">
  <div id = "call" class = "callPapers">
          <h1>To be Announced</h1>
    </div></div>
         
        </div>
        
            
        );
      }
    
  }

  export default Program;