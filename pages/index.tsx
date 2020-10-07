import React from 'react'

import { Grid, Text } from '@chakra-ui/core'
import Header from '../components/header'

const Home: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Text mt="8">Hello World</Text>
    </Grid>
  )
}

export default Home
