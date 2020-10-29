import React from 'react'
import { Heading, Text, Flex, Box, Link } from '@chakra-ui/core'
import { FaCircle } from 'react-icons/fa'

interface SubtitleInterface {
  email: string
}

const Subtitle: React.FC<SubtitleInterface> = ({ email }) => {
  return (
    <Flex
      flexDir="row"
      alignItems="center"
      textTransform="uppercase"
      fontSize={['md', 'md', '3xl', '3xl']}
      color="gray.500"
    >
      <Heading as="h2" fontSize={['xl', 'xl', '3xl', '3xl']}>
        <Text fontWeight="light" display="inline">
          Front
        </Text>
        <Text fontWeight="bold" display="inline">
          End
        </Text>
      </Heading>

      <Box
        as={FaCircle}
        size={['6px', '6px', '8px', '8px', '8px']}
        mx={['1', '2', '3', '3']}
      />

      <Link href="mailto:rafagoulartb@gmail.com" isExternal>
        <Text fontWeight="light" textTransform="uppercase">
          {email}
        </Text>
      </Link>
    </Flex>
  )
}

export default Subtitle
