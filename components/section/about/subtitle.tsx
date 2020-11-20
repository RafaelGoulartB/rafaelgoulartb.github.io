import React from 'react'
import { Heading, Text, Flex, Box, Link } from '@chakra-ui/react'
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
      fontSize={{ sm: 'md', lg: '3xl' }}
      color="gray.500"
    >
      <Heading as="h2" fontSize={{ sm: 'xl', lg: '3xl' }}>
        <Text fontWeight="light" display="inline">
          Front
        </Text>
        <Text fontWeight="bold" display="inline">
          End
        </Text>
      </Heading>

      <Box
        as={FaCircle}
        boxSize={{ sm: '6px', lg: '8px' }}
        mx={{ sm: '2', lg: '3' }}
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
