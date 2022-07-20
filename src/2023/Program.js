import React from 'react';
import PageCarousel from './PageCarousel';
import keyNote from './assets/keynote.png';
import keyNote1 from './assets/Anthony.jpg';
import keyNote2 from './assets/Mohamed.jpg';
import keyNote3 from './assets/Anthony.jpg';
class Program extends React.Component {
 
    componentDidMount() {
      document.title = "Program";
    }
    render(){
      return (
        <div>
             <PageCarousel title="Program"/>
          
             <div class="container">
  <div id = "call" class = "callPapers">

          <h1>TBC</h1>
          <br/>
      </div>
    </div>

        </div>
        
            
        );
      }
    
  }

  export default Program;