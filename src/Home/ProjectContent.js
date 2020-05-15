
import React, { Component } from "react";
import {Link} from 'gatsby'
import Img from "gatsby-image";
import ReactMarkdown from 'react-markdown';


export default class ProjectContent extends Component{

    constructor(props){
        super(props);
        this.state = {
            projectItem : props.items.node
        }
    }


    render(){
        return(
            <>

                <div className="container" style={{padding:"100px 0 0 0"}}>
                    <h4>{this.state.projectItem.projectTitle}</h4>
                    <h6><span className="colored-arrow">{this.state.projectItem.projectTechnologies}</span></h6>
                    
                    <div className="row">
            
                        <div className="col-sm-12">
                            <p>{this.state.projectItem.projectBrief} </p>
                        </div>
            
                        <div className="col-sm-12 text-center">
                            <Img fluid={this.state.projectItem.projectMainMediaField.fluid}
                                    className="target-banner-img"/>
                        </div>
                    </div>
                </div>

                <br></br>


                <div className="container">
                    <h6>UI design | Discovery phase</h6>

                    <div className="row text-center">
                        <div className="col-sm-12 ">     
                            <p><ReactMarkdown source={this.state.projectItem.projectDiscoveryPhase.projectDiscoveryPhase} /></p>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <h6>Project architecture</h6>
                    
                    <div className="row text-center">
                        <div className="col-sm-12">         
                            <p><ReactMarkdown source={this.state.projectItem.projectArchitecture.projectArchitecture} /></p>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <h6>Leanring outcomes</h6>

                    <div className="row text-center">
                        <div className="col-sm-12">
                            <p><ReactMarkdown source={this.state.projectItem.projectLearningOutcome.projectLearningOutcome} /></p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <Link to="/" className="btnD2">Back home</Link>
                            <Link to={this.state.projectItem.nextProjectLink} className="btnD2">Next project</Link>
                        </div>
                    </div>
                </div>    
        </>
        );
    }
}