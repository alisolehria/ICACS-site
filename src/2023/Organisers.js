import React from 'react';
import PageCarousel from './PageCarousel';

class Organisers extends React.Component {
    componentDidMount() {
    document.title = "Organisers";
  }
  render(){
    return (
  <div>
       <PageCarousel title="Organisers"/>

      <div class = "container">
  <div id = "call" class="org">
  
  
  <div class="row">
    <h1>Honorary Chair</h1>
  </div>
    <h2>Steve Gill, Heriot-Watt University, UAE</h2>
  
    <div class="row">
  <h1>Steering Committee</h1>
  </div>
  <h2>Dr. Hani Ragab, Heriot-Watt University, UAE
  <br/>Dr. Abdelmadjid Bouabdallah, University of Technologie of Compiegne, France</h2>
  
  <div class="row">
  <h1>Organizing Committee</h1>
  </div>
  <div class="multiple">
  <h2>
  Dr. Hind Zantout, Heriot-Watt University, UAE - General chair
   
    <br/>Dr. Hani Ragab, Heriot-Watt University, UAE - Co-Chair
    <br/>Prof. Madjid Merabti, University of Sharjah, UAE   
  <br/>Dr. Adrian Turcanu, Heriot-Watt University, UAE   
  <br/>Ali Muzaffar, Heriot-Watt University, UAE 
  </h2>
  </div>
  
  
  
  
  </div>
  
  </div>
  

  </div>
      );
  
  
    }
  }
  
  export default Organisers;
