import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectContent from "../Home/ProjectContent"

const IndexPage = ({data}) => (
  <Layout>
    
    <SEO title="Home" />
    <ProjectContent items={data.projectPortofolio.edges[0]} />

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
            projectLearningOutcome{
                projectLearningOutcome
            }
            nextProjectLink
         }
        }
    }
}`;

export default IndexPage
