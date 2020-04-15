import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import DualInfoblock from '../components/Reuseable/DualInfoblock'
import CourseCart from '../components/Cart/CourseCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}  
      title="I write code"
      subtitle="iDevelopStudio"
      heroClass="hero-background"
    />
    <Infoblock heading="About Us" />
    <CourseCart courses={data.courses} />
    <DualInfoblock heading="Our team" src="https://cdn.dribbble.com/users/37530/screenshots/2127812/open-uri20150630-11-1d0n1js" />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        category
        price
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
