import React from 'react';

class PageCarousel extends React.Component{

    render(){
      return (
       <div class="home_container" id="top-content">
          <div class="container">
  
          <div class="row">
              <div class="col-md-8 offset-md-2 text">
                  <h1 class="wow fadeInLeftBig">    <span style={{color: 'white'}}>{this.props.title}</span></h1>
  
     </div>
  </div>
  </div>
   </div>
        )
    }
  }

  export default PageCarousel;