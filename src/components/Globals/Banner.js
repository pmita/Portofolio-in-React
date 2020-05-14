import React from 'react'
import {Link} from 'gatsby'
import Img from "gatsby-image"

export default function Banner({image_toDisplay}) {
    const setHTMLContent = {
        h1: "Hi, I'm Panos",
        h2: "A junior Front End Developer",
        p1:  "With love and passion for creating unique projects, by utilizing the latest technology trends and stacks."
    }
    return (
        <>
        <section className="banner">
            <div className="container">
                <div className="row">

                <div className="col-lg-6 col-md-12 col-sm-12 text-center py-3">
                    <h2>{setHTMLContent.h1}</h2>
                    <h2>{setHTMLContent.h2}</h2>
                    <p>{setHTMLContent.p1}</p>
                    <Link to="/" className="btnD1">Read more</Link>
                    <Link to="/" className="btnD1">Grab Resume</Link>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 text-center py-3">
                    <Img fluid={image_toDisplay}
                         className="target-banner-img"/>
                </div>
                </div>
            </div>
        </section>
        </>
    );
}
