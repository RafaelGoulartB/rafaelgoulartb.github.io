import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { ServicesInterface } from '../../texts/services'

const ServicesItem: React.FC<ServicesInterface> = ({
  name,
  description,
  icon
}) => {
  return (
    <Flex
      flexDir="column"
      textAlign="center"
      p="10"
      bg="white"
      borderRadius="lg"
      m="3"
      flexBasis="250px"
      flexGrow={1}
      boxShadow="0px 0px 20px rgb(231, 231, 231)"
    >
      <Box as={icon} size="50px" color="blue.500" alignSelf="center" />
      <Heading as="h2" fontSize="xl" py="5">
        {name}
      </Heading>
      <Text lineHeight="tall" fontWeight="light" fontSize="lg">
        {description}
      </Text>
    </Flex>
  )
}

export default ServicesItem