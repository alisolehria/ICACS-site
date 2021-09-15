import React from 'react';
import PageCarousel from './PageCarousel';
class Instructions extends React.Component {
 
    componentDidMount() {
      document.title = "Instructions for Authors ";
    }
    render(){
      return (
        <div>
             <PageCarousel title="Instructions for Authors"/>
          
             <section id="dark-bg">
 
             <div class="container">
  <div id = "call" class = "callPapers">


     
<div class = "row">
    <h3>Conference Proceedings and Paper Submission</h3>
    </div>
   
        <p>The conference proceedings will be published in Springer's Lecture Notes in Networks and Systems. </p>
      
      <h4>Paper Types </h4>

        <p>Your submitted work can either be a full-length or a short paper. Full-length papers are limited to 10 pages and present mature work. Short papers are limited to 7 pages and contain intermediary results that might not have been extensively evaluated.</p>
      
      <h4>Paper Submission</h4>

      <p>Both full-length and short papers are to be submitted to <a href="https://easychair.org/conferences/?conf=acs21" target="_blank">EasyChair</a>. Please submit your papers as PDF files with no author identification (no names, emails, affiliations, etc.) You will be able to include that information in the camera-ready version. Accepted papers will need to provide their source files, as either Word or Latex zipped projects along with the final PDF. </p>

      <h4>Paper Formatting</h4>

      <p>Please follow the instructions for authors on the website of the <a href="https://www.springer.com/series/15179" target="_blank">Lecture Notes in Networks and Systems Series</a> . You can use either the word or latex templates to produce your PDF. For your convenience, you can find <b>here</b> the <a href="./ACS21 Springer Latex Template.zip" download>latex template</a> for articles. It produces this <a href="./ACS21_Springer_Latex_Template.pdf" download>PDF</a> file.</p>
      <div class = "row">
      <h3>Journal Publication </h3></div>
        <p>We are pleased to announce that the <a href="https://www.mdpi.com/journal/electronics/special_issues/ML_electronics" target="_blank">Journal of Electronics</a> (impact factor 2.4) has agreed to publish, in a special issue on <a href="https://www.mdpi.com/journal/electronics/special_issues/ML_electronics" target="_blank">Security, Usability and Machine Learning</a>, the top papers from the conference. The selected papers are expected to be further developed after the conference and will have to satisfy the journal's review process. </p>
        
        <div class = "row">
        <h3>Originality and Copyright </h3></div>

        <p>All submitted work should be original; not previously or currently submitted for publication elsewhere. </p>
        <p>Authors will also need to sign the copyright transfer form provided by our publisher.    </p>

        <a href="./3-Publishing Agreement.docx" download></a> 
    <a href="./4-Permission Request Form (Springer).doc" download></a> 

    </div>
    </div>
    </section>
  
    </div>
         
     
            
        );
      }
    
  }

  export default Instructions;