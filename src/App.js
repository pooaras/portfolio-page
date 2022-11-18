import React from 'react';
import { Home } from './home';
import {Sec} from './sec_page';
function App() {
  var compon
  switch(window.location.pathname){
    case "/":
      compon=<Home/>
      break
    case "/sec_page/":
      compon=<Sec/>
      break;
    default:
      break;
  }
  return (
    <div className="App">
    
     {compon}
      
    </div>
  );
}

export default App;
