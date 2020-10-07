import React from 'react'
import { Text, Flex, Heading } from '@chakra-ui/core'
import Subtitle from './about/subtitle'

const About: React.FC = () => {
  return (
    <Flex
      id="about"
      flexDir="column"
      mt={['24', '24', '32', '32']}
      width={['95%', '95%', '80%', '80%']}
      mx="auto"
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
    </Flex>
  )
}

export default About
