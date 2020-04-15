import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import DualInfoblock from '../components/Reuseable/DualInfoblock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}  
      title="About iDevelopStudio"
      subtitle=""
      heroClass="about-background"
    />
    <DualInfoblock heading="Message from CEO" src="https://cdn.dribbble.com/users/37530/screenshots/2127812/open-uri20150630-11-1d0n1js" />
    <Infoblock heading="Our Vision" />
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
