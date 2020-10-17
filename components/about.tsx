import React from 'react'
import { Text, Flex, Heading, Link, Box, Tooltip } from '@chakra-ui/core'
import Subtitle from './about/subtitle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import about from '../data/about'

const About: React.FC = () => {
  return (
    <Flex
      id="about"
      flexDir="column"
      mt={['32', '32', '40', '40']}
      width={['95%', '90%', '80%', '80%']}
      mx="auto"
      height="100vh"
    >
      <Heading
        as="h1"
        textTransform="uppercase"
        fontSize={['4xl', '4xl', '6xl', '6xl']}
        fontWeight="bold"
        mb="4"
      >
        {about.name}
      </Heading>
      <Subtitle email={about.email} />

      <Text
        fontWeight="light"
        mt="8"
        maxW="720px"
        fontSize={['md', 'lg', 'lg', 'lg']}
        lineHeight="lg"
      >
        {about.description}
      </Text>

      <Flex flexDir="row" mt="8">
        <Tooltip
          hasArrow
          aria-label="Github Profile"
          label="Github Profile"
          placement="top"
          bg="gray.500"
          color="white"
        >
          <Link isExternal mr="4" href="https://www.github.com/RafaelGoulartB">
            <Box as={FaGithub} size="38px" color="gray.500" />
          </Link>
        </Tooltip>
        <Tooltip
          hasArrow
          aria-label="Linkedin Profile"
          label="Linkedin Profile"
          placement="top"
          bg="gray.500"
          color="white"
        >
          <Link isExternal href="https://www.linkedin.com/in/rafael-goulartb/">
            <Box as={FaLinkedin} size="38px" color="gray.500" />
          </Link>
        </Tooltip>
      </Flex>
    </Flex>
  )
}

export default About
