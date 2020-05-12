import React, { Component } from 'react'
import {Link} from 'gatsby'

import { FaLinkedin, FaCodepen , FaGithub , FaFilePdf } from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <Link to="/" className="colored-link"><span><FaLinkedin /></span> Linkedin</Link>
                        <Link to="/" className="colored-link"><span><FaCodepen /></span> CodePen</Link>
                        <Link to="/" className="colored-link"><span><FaGithub /></span> Github</Link>
                        <Link to="/" className="colored-link"><span><FaFilePdf /></span> Resume</Link>
                    </div>
                </div>
            </footer>
        );
    };
}

