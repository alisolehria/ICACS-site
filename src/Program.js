import React from 'react';
import PageCarousel from './PageCarousel';
import keyNote from './assets/keynote.png';
import keyNote1 from './assets/Anthony.jpg';
import keyNote2 from './assets/Mohamed.jpg';
import keyNote3 from './assets/David.jpg';
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
          <div class="col-lg-3 col-md-3 col-xs-3 thumb">
          <div class="row">
            
          <img class="mx-auto d-block" id="keynote" src={keyNote1} alt="Keynote Speaker"   />
          </div>
          <br/>

          <div class="text-center">
        <h4> Dr. Anthony Brooks</h4>
        <p>Aalborg University, Denmark</p>
        <br></br>
        <p>Day 1: 0945 - 1030</p>
          </div>
    </div>
    <div class="col-lg-3 col-md-3 col-xs-3 thumb">
          <div class="row">
            
          <img class="mx-auto d-block" id="keynote" src={keyNote} alt="Keynote Speaker"  />
          </div>
          <br/>

          <div class="text-center">
        <h4>Dr. Bushra Al Blooshi</h4>

        <p>Dubai Electronic Security Center, Government of Dubai</p>
        <p>Day 1: 1045 - 1130</p> 
          </div>
    </div>
    <div class="col-lg-3 col-md-3 col-xs-3 thumb">
          <div class="row">
            
          <img class="mx-auto d-block" id="keynote" src={keyNote3} alt="Keynote Speaker"    />
          </div>
          <br/>

          <div class="text-center">
        <h4>Dr. David Tien</h4>

        <p>Charles Sturt University, NSW Australia</p>
        <p>Day 2: 0945 - 1030</p> 
          </div>
    </div>
    <div class="col-lg-3 col-md-3 col-xs-3 thumb">
          <div class="row">
            
          <img class="mx-auto d-block" id="keynote" src={keyNote2} alt="Keynote Speaker"  />
          </div>
          <br/>

          <div class="text-center">
        <h4>Prof. Mohamed Quafafou</h4>
   
        <p>Aix-Marseille University, France</p>
        <p>Day 2: 1045 - 1130</p> 
          </div>
    </div>
    </div>
    </div>
    <div class = "row">
<h3>Program</h3>

</div>
<p>The program can be downloaded in PDF fromat from <a href="./ACS21 Programme.pdf" download>here.</a></p> 
<h3>All timings are Gulf Standard Time</h3>
<table border="1" cellspacing="0" cellpadding="0" width="100%">
    <tbody>
        <tr>
            <td width="642" nowrap="" colspan="2" valign="top">
                <p>
                    <strong>
                        Day 1 - Saturday 13th November (Face to Face and
                        Online)
                    </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="642" nowrap="" colspan="2" valign="top">
                <p>
                    <strong>Opening and keynotes </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>0930 - 0945</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    <strong>Opening</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>0945 - 1030</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Keynote 1: Dr. Anthony Brooks
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1030 - 1045</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Tea/Coffee break
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1045 - 1130</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Keynote 2: Dr. Bushra Al Blooshi
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1130 - 1140</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    <strong>Tea/Coffee break</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="642" nowrap="" colspan="2" valign="top">
                <p>
                    <strong>Session 1, room 2.09 and online </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1140 - 1200</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Availability in Openstack: The bunny that killed the cloud
                </p>
                <p>
                    <em>
                        Salih Ismail, Hani Ragab Hassen, Mike Just and Hind
                        Zantout
                    </em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1200 - 1220</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Malware Prediction using using LSTM Networks
                </p>
                <p>
                    <em>
                        Saba Iqbal, Abrar Ullah, Shiema Adlan, Ryad Soobhany
                    </em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1220 - 1240</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Android Malware Detection Using API Calls: A Comparison of
                    Feature Selection and Machine Learning Models
                </p>
                <p>
                    <em>
                        Ali Muzaffar, Hani Ragab Hassen, Michael A Lones and
                        Hind Zantout
                    </em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1240 - 1300</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    P2PRC - a peer to peer network designed for computation
                </p>
                <p>
                    <em>Akilan Selvacoumar, Ryad Soobhany, Benjamin Reji</em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1300 - 1400</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="642" nowrap="" colspan="2" valign="top">
                <p>
                    <strong>Session 2, room 5.33 and online </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1400 - 1420</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Intrusion Detection for CAN Using Deep Learning Techniques
                </p>
                <p>
                    <em>
                        Rawan Suwwan, Seba Alkafri, Lotf Elsadek, Khaled Afifi,
                        Imran Zualkernan and Fadi Aloul
                    </em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1420 - 1440</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    A Comparative Study of Machine Learning Binary
                    Classification Methods for Botnet Detection
                </p>
                <p>
                    <em>Nadim Elsakaan and Kamal Amroun</em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1440 - 1500</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Detecting Vulnerabilities in Source Code using Machine
                    Learning
                </p>
                <p>
                    <em>Omar Hany and Mervat Abu-Elkheir </em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1500 - 1520</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Android Malware Detection Using Long Short Term Memory
                    Recurrent Neural Networks
                </p>
                <p>
                    <em>Lilia Georgieva and Basile Lamarque </em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1520 - 1540</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    <strong>Tea/Coffee break</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="642" nowrap="" colspan="2" valign="top">
                <p>
                    <strong>Session 3, room 5.33 and online </strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1540 - 1600</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Vulnerability Detection using Deep Learning
                </p>
                <p>
                    <em>Mahmoud Osama Elsheikh</em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1600 - 1620</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Feature Selection Approach for Phishing Detection based on
                    Machine Learning
                </p>
                <p>
                    <em>Yi Wei and Yuji Sekiya</em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1620 - 1640</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Phishing Email Detection Using Bi-GRU-CNN Model
                </p>
                <p>
                    <em>
                        Mohamed Abdelkarim Remmide, Fatima Boumahdi and
                        Narhimene Boustia
                    </em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1640 - 1700</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    Multi-Face Recognition Systems Based on Deep and Machine
                    Learning Algorithms
                </p>
                <p>
                    <em>Badreddine Alane and Saad Bouguezel</em>
                </p>
            </td>
        </tr>
        <tr>
            <td width="113" nowrap="" valign="top">
                <p>
                    <strong>1700 - 1715</strong>
                </p>
            </td>
            <td width="529" nowrap="" valign="top">
                <p>
                    <strong>
                        ACS21 Student Competition Awards and Close day
                    </strong>
                    <strong></strong>
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