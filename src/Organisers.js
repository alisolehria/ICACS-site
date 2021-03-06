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
  <h2>Hani Ragab, Heriot-Watt University, UAE
  <br/>Abdelmadjid Bouabdallah, University of Technologie of Compiegne, France
  <br/>Hadj Batatia, Heriot-Watt University, UAE</h2>
  
  <div class="row">
  <h1>Organizing Committee</h1>
  </div>
  <div class="multiple">
  <h2>
    Hani Ragab, Heriot-Watt University, UAE - General Chair
    <br/>Hadj Batatia, Heriot-Watt University, UAE - Co-chair
    <br/>Ahcene Bounceur, Bretagne Occidentale University, France - Co-chair
    <br/>Prof. Madjid Merabti, University of Sharjah, UAE
    <br/>Dr. Samia Loucif, Zayed University, UAE    
  <br/>Adrian Turcanu, Heriot-Watt University, UAE - Student Compeitition
  <br/>Hind Zantout, Heriot-Watt University, UAE
  <br/>Mohammad Hamdan, Heriot-Watt University, UAE
  <br/>Neamat Elgayar, Heriot-Watt University, UAE
  <br/>Smitha Kumar, Heriot-Watt University, UAE
  <br/>Ali Muzaffar, Heriot-Watt University, UAE - Web master
  </h2>
  </div>
  
  
  
  
  </div>
  
  </div>
  

  </div>
      );
  
  
    }
  }
  
  export default Organisers;