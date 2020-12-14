import React from 'react'
import { Heading, Link, Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <Link href="#" _hover={{ textDecor: 'none' }}>
      <Heading as="h1" fontSize="2xl" color="gray.500">
        <Text display="inline" fontWeight="bold">
          Rafael Goulart
        </Text>
      </Heading>
    </Link>
  )
}

export default Logo
