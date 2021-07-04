import React from 'react';
import PageCarousel from './PageCarousel';
import keyNote from './assets/keynote.png';
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
          <h1>Keynote Speakers</h1>
          <br/>
          <div class="row">
            
          <img class="mx-auto d-block" src={keyNote} alt="Keynote Speaker"  width="20%" heigh="20%" />
          </div>
          <br/>

          <div class="text-center">
        <h4>Dr. Bushra Al Blooshi</h4>
        <h5>Head of Research and Innovation</h5>
        <p>Dubai Electronic Security Center, Government of Dubai <a href="https://desc.dubai.ae" target="_blank">(desc.dubai.ae)</a></p>
          </div>
          
    </div></div>
         
        </div>
        
            
        );
      }
    
  }

  export default Program;