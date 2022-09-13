import React from 'react';
import classes from './style.module.css';
import Navi from './nav';

function App() {
  return (
    <div className="App">
      
      <section className={classes.sec} >
      <p className={classes.name}>Pooarasu</p><br/>
        <p className={classes.who}>I'm passionate Web developer</p>
        <Navi />
        
      </section>
        {/* fs */}
      
    </div>
  );
}

export default App;
