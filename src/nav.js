import React from "react";
import classes from './stylenav.module.css'
 const Navi=()=>{
    return(
        <div className={classes.navi}>
            <a href="/">Home</a>
            <a href="/sec_page/">About</a>
            <a href="Resume">Resume</a>
            <a href="Contact">Contact</a>
        </div>
    );
}
export default Navi;