import React from "react"

import CTA from '../components/cta'
import Header from '../components/header'
import Footer from '../components/footer'
import Form from '../components/form'

import './index.module.scss'


export default () => {
  return (
    <div>
      <Header />
      <CTA />
      <Form />
      <Footer />
    </div>)
}
