import React from 'react';
import PageCarousel from './PageCarousel';
import Navbar2023 from './App2023';
class Nav extends React.Component {
  componentDidMount() {

}
   render() {
      return (
        
         <div>
          

         

         </div>
      );
   }
}


class ImportantDates extends React.Component {
    componentDidMount() {
    document.title = "Important Dates";
  }
  render(){
    return (
    
 
<div>


<PageCarousel title="Important Dates"/>
<div class="container">
<div id = "call" class = "callPapers">
<h2> Conference: 29 April 2023 </h2>
<div class="row">

<div class="col">
<div class="row" id="dateHeader">

<h3>Paper Submission Dates</h3>
</div>

{/* <div class="event">
<p>Conference paper/contribution deadline</p>
<h2>8th August 2021</h2>
</div> */}


<div class="event">

<p>Conference paper/contribution deadline (extended)</p>
<h2><del>3rd March 2023</del></h2>
<h2>10th March 2023</h2>
  </div>


<div class="event">
<p>Conference paper notification</p>
<h2>28th March 2023</h2>
</div>


<div class="event">
<p>Conference paper camera ready deadline (strict)</p>
<h2>10th April 2023</h2>

</div>

</div>

{/* <div class="col">
<div class="row">

<h3>Poster Submission Dates</h3>
</div>
<div class="event">
<p>Poster/Abstract Submission Date</p>
<h2>TBC</h2>
</div>



<div class="event">
<p>Poster acceptance notification</p>
<h2>TBC</h2>
</div>







</div> */}



</div>

 </div>
 </div>
 </div>
      );
  }
}

export default ImportantDates;
