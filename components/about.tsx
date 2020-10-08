import React from 'react'
import { Text, Flex, Heading, Link, Box } from '@chakra-ui/core'
import Subtitle from './about/subtitle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

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
        Rafael Goulart
      </Heading>
      <Subtitle />

      <Text
        fontWeight="light"
        mt="8"
        maxW="720px"
        fontSize={['md', 'lg', 'lg', 'lg']}
        lineHeight="lg"
      >
        Hello, I am currently working as a freelance Fullstack, Mobile Developer
        and Shopify Developer using technologies like React, Next.js,
        React-native and Node.js, I have had 2 year experience in Front and Back
        End. If there is an opportunity for me to do it. I am ready!
      </Text>

      <Flex flexDir="row" mt="8">
        <Link isExternal mr="4" href="https://www.github.com/RafaelGoulartB">
          <Box as={FaGithub} size="38px" color="gray.500" />
        </Link>
        <Link isExternal href="https://www.linkedin.com/in/rafael-goulartb/">
          <Box as={FaLinkedin} size="38px" color="gray.500" />
        </Link>
      </Flex>
    </Flex>
  )
}

export default About
