import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Home} from './home.js';
import {Profile} from './profile.js'
function App() {
  var component;
 
  return (
    <div >
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/profile" element={<Profile/>} />
            
       
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
