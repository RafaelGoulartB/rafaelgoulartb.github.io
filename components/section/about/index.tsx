import React from 'react'
import { Text, Flex, Heading, Link, Button, Stack } from '@chakra-ui/react'
import Subtitle from './subtitle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

import about from '../../../data/en/about'

const About: React.FC = () => {
  const transition = { delay: 0.2, duration: 0.9 }

  return (
    <Flex
      id="about"
      flexDir="column"
      mt={{ sm: '32', lg: '40' }}
      width={{ sm: '90%', lg: '80%' }}
      mx="auto"
      height="100vh"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={{
          hidden: { y: -180, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1
          }
        }}
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
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={{
          hidden: { x: -150, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1
          }
        }}
      >
        <Text
          fontWeight="light"
          mt="8"
          maxW="840px"
          fontSize={{ sm: 'md', lg: 'lg' }}
          lineHeight="lg"
        >
          {about.description}
        </Text>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={{
          hidden: { y: 180, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1
          }
        }}
      >
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
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="blue"
              variant="solid"
            >
              My Linkedin
            </Button>
          </Link>
        </Stack>
      </motion.div>
    </Flex>
  )
}

export default About
