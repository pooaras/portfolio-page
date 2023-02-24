import clss from './Profile.module.css';
import {Navb} from './nav.js';
import { SkillBar } from 'react-skills';
import mypic from './mypic.jpg';
import { SlSocialSpotify } from "react-icons/sl";
export function Profile() {
    return(
        <div className={clss.resume}>
        <Navb/>
        <div className={clss.body}
        ><h4>Hey, I'm your friend Pooarasu,</h4>
            <p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm an aspiring web developer, specifically interested in backend development.<br/>I'm currently pursuing B.E.Computer science and Engineering in Anna University,Trichy.</em></p>
            <p>
            <ul>
              <li>Phone No.: 9944894813(whatsapp only)</li>
              <li>Email: pooarasusivaraj2002@gmail.com</li>
            </ul>
            </p>
            <h3 className={clss.hover}>Education</h3>
            <p><em>2020-2024</em></p>
            <p>Bachelor of Engineering (B.E.) Computer Science & Engineering</p>
            <p><em>Anna University Regional Office Tiruchirappalli</em></p>
            <h3 className={clss.hover}>Skills</h3>
            <div className={clss.skil}> 
            <SkillBar name="HTML" level={90} color="#A8AF8E" />
            <SkillBar name="CSS" level={80} color="#888D75" />
            <SkillBar name="JS" level={80} color="#6D7061" />
            <SkillBar  name="REACT" level={60} color="#606354" />
            <SkillBar  name="MONGODB"  level={75} color="#606354" />
            <SkillBar  name="JAVA" level={70} color="#494A41" />
            <SkillBar  name="NODEJS" level={40} color="#3E3F38" />
           
            </div>
            <img src={mypic} className={clss.pic}></img>
            <p>You may join my vibe by listening to my spotify&nbsp;<a href="https://open.spotify.com/playlist/1OfpzXI0Be1sCl9axqxKLQ?si=1f5646c054bf4c35" style={{color:"white"}}><SlSocialSpotify className={clss.spot}/></a> &nbsp;playlist. </p>
            </div>

        </div>
    );
    }