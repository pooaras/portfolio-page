import Navi from "./nav"
import pic from "./mypic.jpg"
import classes from './style_sec.module.css';
export function Sec(){
    return(
        <div  className={classes.Sect}>
           <div className={classes.navibar}> <Navi /></div>
           <div className={classes.about}>
           <h3>About</h3>
           <h2>LEARN ABOUT ME...</h2>
           <h2>Pooarasu S</h2>
           <img className={classes.pic} src={pic} alt="mypic"></img>
           
           <article><ul>
            <li>Phone:+91 9944894813</li>
            <li>City:TamilNadu,India</li>
            <li>Age:20</li>
            <li>Degree:B.E Computer Science and Engineering(pursuing)</li>
            <li>Gmail:pooarasusivaraj2002@gmail.com</li> 
            <li> Freelance:Available</li></ul></article>
           </div>
        </div>


        
    )
}