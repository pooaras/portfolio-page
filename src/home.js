import cls from './homestyle.module.css';
import {Navb} from './nav.js';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
export function Home(){

    return( <section className={cls.sec} >
        <Navb/>
          <h2>Pooarasu</h2><br/>
          <p >I'm passionate Web developer</p>
          <div > </div> <br/>
          <div>
            <a href='https://www.linkedin.com/in/pooarasu-s/'>linkedin</a>
            <a href='https://github.com/pooaras'>github</a>
            <a href='mailto:pooarasusivaraj2002@gmail.com'>gmail</a>

          </div>
        </section>);
}