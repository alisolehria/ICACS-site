import React from 'react';
import PageCarousel from './PageCarousel';
import keyNote from './../assets/keynote.png';
import keyNote1 from './../assets/Anthony.jpg';
import keyNote2 from './../assets/Mohamed.jpg';
import keyNote3 from './../assets/Anthony.jpg';
class Program extends React.Component {
 
    componentDidMount() {
      document.title = "Program";
    }
    render(){
      return (
        <div>
             <PageCarousel title="Program"/>
          
             <div class="container">
             <div id = "call" class = "callPapers">

<h1>Keynote Speakers</h1>
<br/>
<div class ="row d-flex flex-wrap align-items-center">
<div class="col-lg-6 col-md-6 col-xs-6 thumb">
<div class="row">
  
<img class="mx-auto d-block" id="keynote" src="./keynote-1-23.jpg" alt="Keynote Speaker"   />
</div>
<br/>

<div class="text-center">

<h4> Mr. Thomas Heuckeroth</h4>
<p>SVP IT Infrastructure & CyberSecurity, Group CISO, The Emirates Group, UAE</p>

<p>1005 – 1115</p>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-6 thumb">
<div class="row">
  
<img class="mx-auto d-block" id="keynote" src="./keynote-2-23.jpg" alt="Keynote Speaker"    />
</div>
<br/>

<div class="text-center">
<h4>Dr. Angelika Eksteen</h4>

<p>CEO at AIDirections, UAE</p>
<br></br>
<p>1130 - 1215</p> 
</div>
</div>
</div></div>
<div class = "row">
<h3>Program</h3>

</div>
<p>The program can be downloaded in PDF fromat from <a href="./ACS23 Programme.pdf" download>here.</a></p> 
<h3>All timings are Gulf Standard Time</h3>
<table border="1" cellspacing="0" cellpadding="0" width="100%">
<tbody>
<tr>
  <td width="642" nowrap="" colspan="2" valign="top">
      <p>
          <strong>
              Saturday 29th April (Face to Face and
              Online)
          </strong>
      </p>
  </td>
</tr>
<tr>
  <td width="642" nowrap="" colspan="2" valign="top">
      <p>
          <strong>Opening and keynotes, room 2.09 and online</strong>
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>0945 - 1000</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
          <strong>Registration at the reception to obtain a visitor card</strong>
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1000 – 1005</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      Conference opening by the Conference Chair
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1005 – 1115</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      Keynote 1: Mr. Thomas Heuckeroth, SVP IT Infrastructure & CyberSecurity, Group CISO, The Emirates Group, UAE
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1115 – 1130</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      <strong>Tea/Coffee break (room 2.09)</strong>
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1130 - 1215</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      Keynote 2: Dr Angelika Eksteen,  CEO at AIDirections, UAE
      </p>
  </td>

</tr>
<tr>
<td width="113" nowrap="" valign="top">
      <p>
          <strong>1215 – 1300</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      <strong>Lunch break (Food court, 1st floor)</strong>
      </p>
  </td>
</tr>
<tr>
  <td width="642" nowrap="" colspan="2" valign="top">
      <p>
          <strong>Session 1: Advances in CyberSecurity, room 2.09 and online. resenters are highlighted.</strong>
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1300 – 1420</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      A Password-Based Mutual Authentication Protocol via Zero-Knowledge Proof Solution
      </p>
      <p>
          <em>
          Mostefa Kara, Konstantinos Karampidis, Zaoui~Sayah, <strong>Abdelkader Laouid</strong>, Giorgos Papadourakis, Mohammad Nadir Abid
          </em>
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1420 – 1440</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      A cross-validated fine-tuned GPT-3 as a novel approach to fake news detection      </p>
      <p>
          <em>
          Karim Hemina, Fatima Boumahdi, Amina Madani, <strong>Mohamed Abdelkarim Remmide </strong>         </em>
      </p>
  </td>
</tr>
<tr>
<td width="113" nowrap="" valign="top">
      <p>
          <strong>1440 – 1500</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      Enhancing efficiency of Arabic Spam Filtering based on Gradient Boosting Algorithm and Manual Hyperparameters tuning      
     </p><p>     <em>
          <strong>Marouane Kihal</strong> and Lamia Hamza        </em>
      </p>
  </td>
</tr>

<tr>
<td width="113" nowrap="" valign="top">
      <p>
          <strong>1440 – 1500</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      Cyberbullying: A BERT Bi-LSTM Solution for Hate Speech Detection
      
      </p><p>          <em>
      <strong>Sihem Nouas</strong>, Fatima Boumahdi, Amina Madani, and Fouaz Berrhail        </em>
      </p>
  </td>
</tr>

<tr>
<td width="113" nowrap="" valign="top">
      <p>
          <strong>1420 – 1430</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      <strong>Tea/Coffee break (room 2.09)</strong>
      
      </p>
  </td>
</tr>




<tr>
  <td width="642" nowrap="" colspan="2" valign="top">
      <p>
          <strong>Session 2: AI for Cybersecurity, room 2.09 and online. Presenters are highlighted.</strong>
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1430 – 1450</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
      <p>
      DroidDissector: A Static and Dynamic Analysis Tool for Android Malware Detection
      </p>
      <p>
          <em>
          <strong>Ali Muzaffar</strong>, Hani Ragab Hassen, Hind Zantout and Michael A Lones
          </em>
      </p>
  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1450 – 1510</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
  <p>
  Android Malware Detection Using Control Flow Graphs and Text Analysis
      </p>
      <p>
          <em><strong>Ali Muzaffar</strong>, Ahmed Hamza Riaz and Hani Ragab Hassen</em>
      </p>

  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1510 – 1530</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
  <p>
  NTFA: Network Flow Aggregator 
      </p>
      <p>
          <em><strong>Kayvan Karim</strong>, Hani Ragab Hassen,  Hadj Batatia</em>
      </p>

  </td>
</tr>
<tr>
  <td width="113" nowrap="" valign="top">
      <p>
          <strong>1530 – 1535</strong>
      </p>
  </td>
  <td width="529" nowrap="" valign="top">
  <p>
          <strong>Concluding notes</strong>
      </p>
     
  </td>
</tr>

</tbody>
</table>
<br></br>
    </div>

        </div>
        
            
        );
      }
    
  }

  export default Program;