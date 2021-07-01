import React from 'react';
import PageCarousel from './PageCarousel';
class StudentCompetition extends React.Component {
 
    componentDidMount() {
      document.title = "Student Competition";
    }
    render(){
      return (
        <div>
             <PageCarousel title="Student Competition"/>
          
             <div class="container">
  <div id = "call" class = "callPapers">


  <p>
BSc students/graduates are invited to submit their security projects and research. It could represent their:
<ul>
<li>Degree project and dissertation (graduation not earlier than April 2019)</li>
<li>A project they did when they were students (graduation not earlier than April 2021)</li>

</ul>
</p>
<p> In order to participate, you will need to submit a one-page description of your work and the significance of its outcomes along with a poster. Posters use the A1 format. They will not be published in the conference proceedings.
{/* If your submission is accepted, then you will be requested to submit a poster using the following template. */}
</p>
<p>
Your project description is to be submitted <a href = "https://easychair.org/conferences/?conf=acs21" target = "_blank"> here</a>.

</p>
<p style={{fontWeight: 'bold'}}>The winners of the competition will be awarded the following prizes:</p>
<ul>
    <li>First prize – AED1,500 + 35% Scholarship to study an MSc programme at Heriot-Watt University, Dubai.</li>
    <li>Second prize – AED1,000 + 25% Scholarship to study an MSc programme at Heriot-Watt University, Dubai.</li>
    <li>Third prize – AED500 + 20% Scholarship to study an MSc programme at Heriot-Watt University, Dubai.</li>
</ul>

<p>You can send your informal inquiries about the student competition to <a href="mailto:a.turcanu@hw.ac.uk">Dr. Adrian Turcanu</a>.</p>
</div></div>
</div>
        
            
        );
      }
    
  }

  export default StudentCompetition;