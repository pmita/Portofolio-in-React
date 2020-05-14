import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    
    <SEO title="Home" />
    
    <div className="container" style={{padding:"100px 0 0 0"}}>
    <h4>My personal portofolio</h4>
            <h6><span className="colored-arrow">Gatsby | React | Netlify</span></h6>
        <div className="row">
            
            <div className="col-sm-12">
                <p>
                    This brief project started as I stumbled my way into a new way of managing static websites and content
                    managing websites. I combined the latest trends of static site generator with open source hosting services such as Netlify.
                    Specifically I am utilizing the robust Gatsby,js that takes advantage of GraphQl queries for speedy and UI friendly API calls 
                    through the Contentful content management service. In particular, Contentful is acting as our headless CMS with it's main purpose 
                    being to allow me to handle the content I upload in a more controlled and UX-friendly manner.
                </p>
            </div>
            
            <div className="col-sm-12 text-center">
                <Img fluid={data.bannerImage.childImageSharp.fluid}
                         className="target-banner-img"/>
            </div>
        </div>

        <div className="row">
        <div className="col-sm-12">
            <h6>UI design | Discovery phase</h6>
                <p>
                    This brief project started as I stumbled my way into a new way of managing static websites and content
                    managing websites. I combined the latest trends of static site generator with open source hosting services such as Netlify.
                    Specifically I am utilizing the robust Gatsby,js that takes advantage of GraphQl queries for speedy and UI friendly API calls 
                    through the Contentful content management service. In particular, Contentful is acting as our headless CMS with it's main purpose 
                    being to allow me to handle the content I upload in a more controlled and UX-friendly manner.
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4 text-center">
                <Img fluid={data.bannerImage.childImageSharp.fluid}
                         className="target-banner-img"/>
            </div>
            <div className="col-sm-4 text-center">
                <Img fluid={data.bannerImage.childImageSharp.fluid}
                         className="target-banner-img"/>
            </div>
            <div className="col-sm-4 text-center">
                <Img fluid={data.bannerImage.childImageSharp.fluid}
                         className="target-banner-img"/>
            </div>
        </div>

        <div className="row">
        <div className="col-sm-12">
            <h6>Project architecture</h6>
                <p>
                    I wanted to create a seamless bridge between me as a content creator and the Continuous Integration cycle of the project. With 
                    minor improvements taking place both in the UI and UX design of the prroject, I needed to ensure these we integrated organically without me 
                    having to constantly overlook the process. Regular Git commits in combination with the intuative user friendly dashboard of Contentful made it a brieze for
                    me to code and create.
                </p>

                <h6>Learning outcomes</h6>
                <p>
                  The second bridge I needed to build would have to include the seameless integration of new content constantly being updated on the site without having any down time,
                  any custome configuration or even minor css fixes. I needed each piece of future content to be delivered to the users immediatelly. As a result the free web hosting service, Netlify, in combination
                  with it's in-built webhooks (Travis and Circle CI) allowed to immediatelly re-built my Github project, updated, with any new content from the CMS.
                </p>
            </div>
            <div className="col-sm-12 text-center">
                <Img fluid={data.bannerImage.childImageSharp.fluid}
                         className="target-banner-img"/>
            </div>
        </div>
    </div>

    <div className="row">
      <div className="col-sm-12 text-center">
        <a href="portofolio-project" className="btnD1">Main Page</a>
        <a href="portofolio-project" className="btnD1">Next Page</a>
      </div>
    </div>
    
  </Layout>
)

export const query = graphql`
{
    bannerImage: file(relativePath: {eq: "Untitled.png"}){
      childImageSharp{
        fluid (quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
}`;

export default IndexPage
