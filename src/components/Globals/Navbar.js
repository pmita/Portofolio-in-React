import React, { Component } from 'react'

import { FaLinkedin, FaCodepen , FaGithub , FaFilePdf } from 'react-icons/fa';

import myResume from "../../images/jr_dev_resume.pdf"

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
                        <a href="#" className="navbar-brand">Panos Mita</a>

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
                            <li className="nav-item"><a href="https://www.linkedin.com/in/pmita/" rel="noopener noreferrer" target="_blank" className="nav-link"><span><FaLinkedin /></span> Linkedin</a></li>
                            <li className="nav-item"><a href="https://codepen.io/pmita" rel="noopener noreferrer" target="_blank" className="nav-link"><span><FaCodepen /></span> CodePen</a></li>
                            <li className="nav-item"><a href="https://github.com/pmita" rel="noopener noreferrer" target="_blank" className="nav-link"><span><FaGithub /></span> Github</a></li>
                            <li className="nav-item"><a href={myResume} rel="noopener noreferrer" target="_blank" download="myResume" className="nav-link"><span><FaFilePdf /></span> Resume</a></li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </header>
        );
    };
}

