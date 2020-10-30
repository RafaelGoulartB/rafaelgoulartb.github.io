import React from 'react'
import { Heading, Text } from '@chakra-ui/core'

const Logo: React.FC = () => {
  return (
    <Heading as="h1" fontSize="2xl" color="white">
      <Text display="inline" fontWeight="bold">
        Rafael Goulart
      </Text>
    </Heading>
  )
}

export default Logo
