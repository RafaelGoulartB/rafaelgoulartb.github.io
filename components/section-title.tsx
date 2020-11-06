import React from 'react'

import { Heading, HeadingProps } from '@chakra-ui/core'

const SectionTitle: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading
      as="h4"
      textTransform="uppercase"
      fontSize="6xl"
      fontWeight="bold"
      mb="12"
      {...props}
    >
      {children}
    </Heading>
  )
}

export default SectionTitle
