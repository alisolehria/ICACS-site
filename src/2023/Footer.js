

import React from 'react';
import hwLogo from './../assets/heriot-watt.jpg';

class Footer2023 extends React.Component{

    render(){
      return (
        <footer class="footer-dark">
        <div class = "container">
        
        <h2>Sponsors</h2>
        <h3>Diamond Sponsors</h3>
        
        
                
                <img  class="border" src={hwLogo} alt="Heriot-Watt Logo"  width="20%" heigh="20%" />
                </div>
        
                <hr class="mt-2 mb-3"/>
        <p class="text-right">Copyright ACS© 2022 All rights reserved</p>
        
        
        </footer>
        )
    }
  }

  export default Footer2023;