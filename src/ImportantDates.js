import React from 'react';
import PageCarousel from './PageCarousel';

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
<h2> Conference: 13-14 November 2021 </h2>
<div class="row">

<div class="col">
<div class="row" id="dateHeader">

<h3>Paper Submission Dates</h3>
</div>

{/* <div class="event">
<p>Paper submission deadline</p>
<h2>8th August 2021</h2>
</div> */}


<div class="event">

<p>Paper submission deadline (extended)</p>
<h2>28th August 2021</h2>
</div>


<div class="event">
<p>Paper acceptance notification</p>
<h2>15th September 2021</h2>
</div>


<div class="event">
<p>Camera-ready submission (strict)</p>
<h2>25th September 2021</h2>

</div>

</div>

<div class="col">
<div class="row">

<h3>Poster Submission Dates</h3>
</div>
<div class="event">
<p>Poster/Abstract Submission Date</p>
<h2>25th August 2021</h2>
</div>



<div class="event">
<p>Poster acceptance notification</p>
<h2>15th September 2021</h2>
</div>







</div>



</div>

 </div>
 </div>
 </div>
      );
  }
}

export default ImportantDates;