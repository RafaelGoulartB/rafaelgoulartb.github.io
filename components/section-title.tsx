import React from 'react'

import { Heading } from '@chakra-ui/core'

interface SectionTitle {
  title: string
}

const SectionTitle: React.FC = ({ children }) => {
  return (
    <Heading
      as="h4"
      textTransform="uppercase"
      fontSize="6xl"
      fontWeight="bold"
      mb="12"
    >
      {children}
    </Heading>
  )
}

export default SectionTitle
