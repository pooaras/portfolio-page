import classes from './style.module.css';
import Navi from './nav';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
export function Home(){
    return( <section className={classes.sec} >
        <p className={classes.name}>Pooarasu</p><br/>
          <p className={classes.who}>I'm passionate Web developer</p>
          <div className={classes.navibar}> <Navi /></div> <br/>
          <div className={classes.icon}>
            <a href='https://www.linkedin.com/in/pooarasu-s/'><FaLinkedin className={classes.in}/></a>
            <a href='https://github.com/pooaras'><FaGithub className={classes.in}/></a>
            <a href='mailto:pooarasusivaraj2002@gmail.com'><HiOutlineMail className={classes.in}/></a>
          </div>
        </section>);
}