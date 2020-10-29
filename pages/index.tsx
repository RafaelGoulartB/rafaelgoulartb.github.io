import React from 'react'

import { Grid } from '@chakra-ui/core'
import Header from '../components/header'
import About from '../components/about/'
import Portfolio from '../components/portfolio/'
import Services from '../components/services/'
import Skills from '../components/skills/'
import Footer from '../components/footer'

const Home: React.FC = () => {
  return (
    <Grid bg="#fafafa">
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Footer />
    </Grid>
  )
}

export default Home
