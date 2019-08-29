import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


import CTA from '../components/cta'
import Header from '../components/header'
import Footer from '../components/footer'
import Form from '../components/form'

import './index.scss'


export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { regex: "/bg-intro-desktop/" }) {
        id
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  
  return (
    
    <>
      <BackgroundImage className="background__img" fluid={
      data.file.childImageSharp.fluid
      }>
        <div className="background">
        
          <Header />

          <div className="form__group">
            <CTA />
            <Form />
          </div>
        
        
        </div>
        <Footer />
      </BackgroundImage>
    </>
    
  )
}
