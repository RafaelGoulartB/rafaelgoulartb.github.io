import React from 'react'

import { Grid, Text } from '@chakra-ui/core'
import Header from '../components/header'
import About from '../components/about'

const Home: React.FC = () => {
  return (
    <Grid>
      <Header />
      <About />
    </Grid>
  )
}

export default Home
