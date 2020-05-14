import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import ReactMarkdown from "react-markdown"

const IndexPage = ({data}) => (
  <Layout>
    
    <SEO title="Home" />
    
    <div className="container" style={{padding:"100px 0 0 0"}}>
    <h4>{data.projectPortofolio.edges[0].node.projectTitle}</h4>
            <h6><span className="colored-arrow">{data.projectPortofolio.edges[0].node.projectTechnologies}</span></h6>
        <div className="row">
            
            <div className="col-sm-12">
                <p>{data.projectPortofolio.edges[0].node.projectBrief} </p>
            </div>
            
            <div className="col-sm-12 text-center">
                <Img fluid={data.projectPortofolio.edges[0].node.projectMainMediaField.fluid}
                         className="target-banner-img"/>
            </div>
        </div>

        <div className="row">
        <div className="col-sm-12">
            <h6>UI design | Discovery phase</h6>
                <p>
                    {data.projectPortofolio.edges[0].node.projectDiscoveryPhase.projectDiscoveryPhase}
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4 text-center">
                <Img fluid={data.projectPortofolio.edges[0].node.projectMainMediaField.fluid}
                         className="target-banner-img"/>
            </div>
            <div className="col-sm-4 text-center">
                <Img fluid={data.projectPortofolio.edges[0].node.projectMainMediaField.fluid}
                         className="target-banner-img"/>
            </div>
            <div className="col-sm-4 text-center">
                <Img fluid={data.projectPortofolio.edges[0].node.projectMainMediaField.fluid}
                         className="target-banner-img"/>
            </div>
        </div>

        <div className="row">
        <div className="col-sm-12">
            <h6>Project architecture</h6>
                    <ReactMarkdown source={data.projectPortofolio.edges[0].node.projectArchitecture.projectArchitecture} escapHtml={false} />
                <p>
                  The second bridge I needed to build would have to include the seameless integration of new content constantly being updated on the site without having any down time,
                  any custome configuration or even minor css fixes. I needed each piece of future content to be delivered to the users immediatelly. As a result the free web hosting service, Netlify, in combination
                  with it's in-built webhooks (Travis and Circle CI) allowed to immediatelly re-built my Github project, updated, with any new content from the CMS.
                </p>
            </div>
            <div className="col-sm-12 text-center">
                <Img fluid={data.projectPortofolio.edges[0].node.projectMainMediaField.fluid}
                         className="target-banner-img"/>
            </div>
        </div>
    </div>
  </Layout>
)

export const hobbyProjectQuery = graphql`
{
    projectPortofolio: allContentfulProjectBrief{
        edges{
         node{
             id
            projectTitle
            projectTechnologies
            projectBrief
            projectMainMediaField{
                fluid (quality:100){
                    ...GatsbyContentfulFluid_tracedSVG
                }
              }
            projectDiscoveryPhase{
                projectDiscoveryPhase
            }
            projectArchitecture{
				projectArchitecture
            }
         }
        }
    }
}`;

export default IndexPage
