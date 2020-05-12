import React, { Component } from 'react'
import {Link} from 'gatsby'

import { FaLinkedin, FaCodepen , FaGithub , FaFilePdf } from 'react-icons/fa';

export default class Navbar extends Component {
    /*Defining a constructor for us to further access the state variables */   
    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
    };
    /* IIF to check the state of the navbar and toggle the class accordingly*/
    navbarHandler = () =>{
        this.state.navbarOpen
            ? this.setState({
                navbarOpen:false,
                css: "collapse navbar-collapse"
            })
            : this.setState({
                navbarOpen:true,
                css: "collapse navbar-collapse show"
            });
    };
    render() {
        return (
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/" className="navbar-brand">Panos Mita</Link>

                        <button className="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarNav" 
                                aria-controls="navbarNav" 
                                onClick={this.navbarHandler}>
                            
                                <span className="navbar-toggler-icon"></span>

                        </button>

                    <div className={this.state.css} id="navbarNav">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item"><Link to="/" className="nav-link"><span><FaLinkedin /></span> Linkedin</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link"><span><FaCodepen /></span> CodePen</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link"><span><FaGithub /></span> Github</Link></li>
                            <li className="nav-item"><Link to="/" className="nav-link"><span><FaFilePdf /></span> Resume</Link></li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </header>
        );
    };
}

