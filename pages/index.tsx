import React from 'react'

import { Grid } from '@chakra-ui/core'
import Header from '../components/header'
import About from '../components/about'
import Portfolio from '../components/portfolio'

const Home: React.FC = () => {
  return (
    <Grid>
      <Header />
      <About />
      <Portfolio />
    </Grid>
  )
}

export default Home
