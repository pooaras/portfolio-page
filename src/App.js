import logo from './logo.svg';
import './App.css';
import {Home} from './home.js';
function App() {
  var component;
  if('/') component= <Home/>
  return (
    <div >
      {component}
    </div>
  );
}

export default App;
