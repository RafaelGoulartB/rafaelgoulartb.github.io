import React from 'react'

import { Grid } from '@chakra-ui/core'
import Header from '../components/header'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Services from '../components/services'

const Home: React.FC = () => {
  return (
    <Grid bg="#fafafa">
      <Header />
      <About />
      <Portfolio />
      <Services />
    </Grid>
  )
}

export default Home
