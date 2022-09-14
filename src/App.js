import React from 'react';
import classes from './style.module.css';
import Navi from './nav';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
function App() {
  return (
    <div className="App">
      
      <section className={classes.sec} >
      <p className={classes.name}>Pooarasu</p><br/>
        <p className={classes.who}>I'm passionate Web developer</p>
        <Navi /> <br/>
        <div className={classes.icon}>
          <FaLinkedin className={classes.in}/>
        <FaGithub className={classes.in}/>
        <HiOutlineMail className={classes.in}/>
        </div>
      </section>
        {/* fs */}
      
    </div>
  );
}

export default App;
