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
  {/* <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      /> */}
  
    </div></div>
         
        </div>
        
            
        );
      }
    
  }


  export default GoogleApiWrapper({
    apiKey: "AIzaSyAq83z_SC8bL5TsQkL19FFqVttWkomuSEs"
  })(Venue);