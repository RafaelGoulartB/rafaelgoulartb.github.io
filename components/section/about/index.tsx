import React from 'react'
import { Text, Flex, Heading, Link, Button, Stack } from '@chakra-ui/react'
import Subtitle from './subtitle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import about from '../../../data/en/about'

const About: React.FC = () => {
  return (
    <Flex
      id="about"
      flexDir="column"
      mt={{ sm: '32', lg: '40' }}
      width={{ sm: '90%', lg: '80%' }}
      mx="auto"
      height="100vh"
    >
      <Heading
        as="h1"
        textTransform="uppercase"
        fontSize={{ sm: '4xl', lg: '6xl' }}
        fontWeight="bold"
        mb="4"
      >
        {about.name}
      </Heading>
      <Subtitle email={about.email} />

      <Text
        fontWeight="light"
        mt="8"
        maxW="840px"
        fontSize={{ sm: 'md', lg: 'lg' }}
        lineHeight="lg"
      >
        {about.description}
      </Text>

      <Stack direction="row" spacing={5} mt="8">
        <Link
          isExternal
          href="https://www.github.com/RafaelGoulartB"
          _hover={{ textDecor: 'none' }}
        >
          <Button leftIcon={<FaGithub />} colorScheme="blue" variant="solid">
            My Github
          </Button>
        </Link>

        <Link
          isExternal
          href="https://www.linkedin.com/in/rafael-goulartb/"
          _hover={{ textDecor: 'none' }}
        >
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            My Linkedin
          </Button>
        </Link>
      </Stack>
    </Flex>
  )
}

export default About
