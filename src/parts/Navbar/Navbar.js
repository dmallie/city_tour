import React, {Component} from 'react';
import logo from '../../logo.png';
import './Navbar.css';

class Navbar extends Component{
       constructor(props){
              super(props);
       }

       render(){
              return(
                     <div className="navbar" >
                            <img src={logo} alt="logo" />
                            <ul className="lists">
                                   <li>
                                          <a href="#" className="nav-link">
                                                 home
                                          </a>
                                   </li>
                                   <li>
                                          <a href="#" className="nav-link">
                                                 about
                                          </a>
                                   </li>
                                   <li>
                                          <a href="#" className="nav-link">
                                                 tours
                                          </a>
                                   </li>
                            </ul>
                     </div>
              );
       }
}

export default Navbar;