import React, { Component } from 'react'
import { FaLinkedin, FaCodepen , FaGithub , FaFilePdf } from 'react-icons/fa';

import myResume from "../../images/jr_dev_resume.pdf"

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <a href="https://www.linkedin.com/in/pmita/" rel="noopener noreferrer" target="_blank" className="colored-link"><span><FaLinkedin /></span> Linkedin</a>
                        <a href="https://codepen.io/pmita" rel="noopener noreferrer" target="_blank" className="colored-link"><span><FaCodepen /></span> CodePen</a>
                        <a href="https://github.com/pmita" rel="noopener noreferrer" target="_blank" className="colored-link"><span><FaGithub /></span> Github</a>
                        <a href={myResume} rel="noopener noreferrer" target="_blank" download="myResume" className="colored-link"><span><FaFilePdf /></span> Resume</a>
                    </div>
                </div>
            </footer>
        );
    };
}

