import clss from './Profile.module.css';
import {Navb} from './nav.js';
export function Profile() {
    return(
        <div className={clss.resume}>
        <Navb/><h4>Hey I'm your freaky friend Pooarasu</h4>
            <p><em>I'm an aspiring backend developer.I'm currently pursuing B.E.Computer science and Engineering in Anna University,Trichy.</em></p>
            <p>
            <ul>
              <li>9944894813(whatsapp only)</li>
              <li>pooarasusivaraj2002@gmail.com</li>
            </ul>
            </p>
            <h3>Education</h3>
            <p><em>2020-2024</em></p>
            <p>Bachelor of Engineering (B.E.) Computer Science & Engineering</p>
            <p><em>Anna University Regional Office Tiruchirappalli</em></p>
            <h3>Skills</h3>

        </div>
    );
    }