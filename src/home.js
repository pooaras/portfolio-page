import cls from './homestyle.module.css';
import {Navb} from './nav.js';
export function Home(){

    return( <section className={cls.sec} >
        <Navb/>
          <h2 className={cls.name}>Pooarasu</h2><br/>
          <p className={cls.con}>I'm passionate Web developer</p>
          <div > </div> <br/>
          <div>
            

          </div>
        </section>);
}