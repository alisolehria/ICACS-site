import React from 'react';
import PageCarousel from './PageCarousel';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%'
  };
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

  
    </div></div>
         
        </div>
        
            
        );
      }
    
  }


  export default GoogleApiWrapper({
    apiKey: "API"
  })(Venue);