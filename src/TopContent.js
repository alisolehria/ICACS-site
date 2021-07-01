import React from 'react';
import DateCountdown from 'react-date-countdown-timer';
class TopContent extends React.Component {
    render(){
      return (
  
        <div class="top-content" id="top-content">
          <div class="container">
  
          <div class="row">
              <div class="col-md-8 offset-md-2 text">
                  <h1 class="wow fadeInLeftBig"> International Conference on Applied CyberSecurity (ACS) 2021</h1>
                  <h3 class="conference_date"> 13-14 November 2021 | Dubai, UAE</h3>
                  <div class="description wow fadeInLeftBig">
                      <p>
  The International Conference on Applied CyberSecurity (ACS) aims to bring together researchers, practitioners, developers and students in the field of cybersecurity to exchange novelties, experience and ideas. </p>
  
  <p>We invite original unpublished papers from academics, government and industry practitioners as well as research students on their innovations in both theory and practice of cybersecurity. Papers could be on original designs and concepts, techniques and mechanisms, as well as field applications. </p>
  
  {/*<p>“Submitted papers must not substantially overlap with papers that have been published or that are simultaneously submitted to a journal or a conference/workshop with proceedings.”                     </p>*/}
                  </div>
  
  
     </div>
  
     </div>
     <div class="col-md-8 offset-md-2 text">
     <p>Co-located with <a id = "icita_anchor" href="https://icita.world/#/" target="_blank" >ICITA 2021</a></p>
     </div>
     <div id = "row" class="text timelabel">
   <h1>Time to Conference</h1>
  </div>
  
             <div id = "countdown">
     <DateCountdown dateTo='November 13, 2021 00:00:00 GMT+03:00' />
  
     </div>
  
     </div>
  
   </div>
  
        );
    }
  }

  export default TopContent;