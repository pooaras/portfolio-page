import React from "react";
import classes from './style.module.css'
 const Navi=()=>{
    return(
        <div className={classes.navi}>
            <a href="Home">Home</a>
            <a href="About">About</a>
            <a href="Resume">Resume</a>
            <a href="Contact">Contact</a>
        </div>
    );
}
export default Navi;