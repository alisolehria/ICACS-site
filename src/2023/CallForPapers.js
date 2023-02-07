import React from 'react';
import PageCarousel from './PageCarousel';
import MDPI from "./../assets/MDPI.png";
import Springer from "./../assets/Springer.png";
import lecture from "./../assets/lecture-notes.jpg";
import ISI from "./../assets/ISI.png";

import Scopus from "./../assets/scopus.png"
import { Link } from 'react-router-dom';
class CallForPapers extends React.Component {
    componentDidMount() {
        document.title = 'Call for Papers';
      }
render(){
  return (
<div>
<PageCarousel title="Call for Papers"/>
       <section id="dark-bg">
    <div class = "container">
<div id = "call" class = "callPapers">


<div class ="row d-flex flex-wrap align-items-center">
<div class="col-lg-3 thumb">
 


</div>
<div class="col-lg-4 thumb">
 
    <img src="https://alll.fed.um.edu.mo/wp-content/uploads/2020/05/v1-400x100.png" alt="Springer" />

</div>



<div class="col-lg-4 thumb">

   
<img src="https://media.springernature.com/lw150/springer-static/cover/series/15179.jpg?as=jpg" alt="lecture" />

</div>









</div>




    <div class = "row" id ="conf-topics">
<h3>Conference Topics</h3>
</div>

      <p>Topics of interest are, but not limited to: </p>
      <ul>
          <li>Machine learning applications to security and data-driven security</li>
          <li>AI security </li>
          <li>Network and wireless security </li>
          <li>Malware and unwanted software</li>
          <li>Digital forensics & biometrics (multimedia security, mobile, watermarking & data hiding, etc.)</li>
          <li>Information Security Management (governance, risk management, security policies, compliance, operations, incident management, usability & human factors, etc.) </li>
          <li>Access management</li>
          <li>Authentication and authorization</li>
          <li>Intrusion and anomaly detection and prevention </li>
          <li>Threat Modelling, Vulnerability Assessment and Security Assessment</li>
          <li>Web security </li>
          <li>Anonymity & Privacy</li>
          <li>System and OS security</li>
          <li>Cryptography applications </li>
          <li>5G security</li>
          <li>Social network security</li>
          <li>Infrastructure security</li>
          <li>Source code and binaries security</li>
          <li>Secure computer architectures</li>
          <li>IT security laws and policies</li>
          <li>Denial-of-service attacks and countermeasures </li>
          <li>Anonymity and privacy</li>
          <li>Security awareness, education and training</li>
          <li>Application security </li>
          <li>Blockchain and distributed ledger security </li>
          <li>Cloud security </li>
          <li>Cyber physical systems security </li>
          <li>Distributed systems security </li>
          <li>Embedded systems security </li>
          <li>Mobile security and privacy </li>
          <li>Internet of Things Security</li>
          <li>Security and privacy policies and metrics</li>
          <li>Security architectures</li>
          <li>Smart Cities Security</li>
    </ul>

<div class = "row">
<h3>Conference Themes</h3>
 </div>

   <p>The above topics are organized into themes as follows:</p>
   <ul>
   <li><h4>Industry 4.0 Security & AI</h4>
   Machine learning applications to security and data-driven security, AI security, 5G security, Internet of Things Security, Cloud security, Operational technology security, Cyber physical systems security </li>
   <li><h4>Ethical hacking and Digital forensics</h4>Malware and unwanted software, Source code and binaries security, Vulnerability Assessment and Security Assessment, multimedia security, mobile, watermarking & data hiding, denial-of-service attacks and countermeasures</li>
   <li><h4>Information Security Management</h4>Governance, risk management, security policies, compliance, operations, incident management, usability & human factors, Security and privacy policies and metrics, Threat Modelling, IT security laws and policies, security awareness, education and training, access management</li>
   <li><h4>Secure Infrastructure</h4>
   Network and wireless security, smart cities security, web security, mobile security & privacy, distributed systems security, anonymity and privacy, intrusion and anomaly detection and prevention, OS security, infrastructure security, authentication and authorization, biometrics, secure computer architectures, blockchains and distributed ledger security, social network security, application security, cryptography applications, security architectures, embedded systems security</li>
   </ul>






<div class = "row">
<h3>Conference Proceedings and Paper Submission</h3>
 </div>
 {/* <p>The conference proceedings will be published in Springer's Lecture Notes in Networks and Systems.</p> */}

<p>Your submitted work can either be a full-length or a short paper.

Full-length papers are limited to 10 pages and present mature work.

Short papers are limited to 7 pages and contain intermediary results that might not have been extensively evaluated.

Both types of papers are to be submitted to <a href = "https://easychair.org/conferences/?conf=acs23" target = "_blank"> EasyChair</a>.
</p>

<p>
Please follow the instructions for authors on the website of the <a href = "https://www.springer.com/series/15179" target = "_blank"> Lecture Notes in Networks and Systems Series </a>.
</p>

{/* <div class = "row">
<h3>Journal Publication</h3>
</div>

<p>We are pleased to announce that the <a href="https://www.mdpi.com/journal/electronics/special_issues/ML_electronics" target = "_blank">Journal of Electronics</a> (impact factor 2.4) has agreed to publish, in a special issue on  <a href="https://www.mdpi.com/journal/electronics/special_issues/ML_electronics" target = "_blank">Security, Usability and Machine Learning</a>, the top papers from the conference. The selected papers are expected to be further developed after the conference and will have to satisfy the journal's review process.</p>
 */}



<div class = "row">
<h3>Originality and Copyright</h3>
 </div>


<p>
All submitted work should be original; not previously or currently submitted for publication elsewhere.
</p>
<p>
Please submit your papers as PDF files with no author identification (no names, emails, affiliations, etc.) You will be able to include that information in the camera ready version. Accepted papers will need to provide their source files, as either Word or Latex zipped projects along with the final PDF.
</p>
<p>
Authors will also need to sign the copyright transfer form provided by our publisher.
</p>


    {/* 
    <div class = "row">
    <h3>Student Competition</h3>
    </div>

    <p>
    BSc students/graduates are invited to submit their security projects and research. It could represent their:
    <ul>
    <li>Degree project and dissertation (graduation not earlier than academic year 2018/2019)</li>
    <li>A project they did when they were students (graduation not earlier than April 2021)</li>

    </ul>
    </p>
    <p>You will find further information <Link to="/studentcompetition">here</Link>.</p> */}



</div>

<div class ="row d-flex flex-wrap align-items-center">
<div class="col-lg-4 col-md-4 col-xs-4 thumb">
 
    <img src="https://alll.fed.um.edu.mo/wp-content/uploads/2020/05/v1-400x100.png" alt="Springer" />

</div>



<div class="col-lg-4 col-md-4 col-xs-4 thumb">

   
<img src="https://media.springernature.com/lw150/springer-static/cover/series/15179.jpg?as=jpg" alt="lecture" />

</div>
</div>









</div>

</section>
</div>

    );
}
}

  
export default CallForPapers;
