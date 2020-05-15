
import React, { Component } from "react";
import {Link} from 'gatsby'
import Img from "gatsby-image";



export default class ProjectSection extends Component{

    constructor(props){
        super(props);
        this.state = {
            projectItems : props.items.edges
        }
    }


    render(){
        return(
            <>

                <div className="container my-2 text-center">
                    <h2 style={{margin:"15% 0 10% 0"}}>Projects</h2>
                   
                        {this.state.projectItems.map(({ node }) =>{
                            return(
                            <div 
                                key={node.id}
                                classaName="row col-lg-4 col-md-6 col-sm-12 float-left">
                                
                                    <div className="col-lg-4 col-md-6 col-sm-10">
                                        <Img fixed={node.projectMainMediaField.fixed} />

                                        <h4>{node.projectTitle}</h4>
                                        <h6>{node.projectTechnologies}</h6>
                                        
                                        <p>{node.projectBrief}</p>

                                        <Link to={node.currentProjectLink} className="btnD1">Check it out</Link>
                                    </div>

                            </div>  
                            );
                        })}
                
                </div>

            
        </>
        );
    }
}