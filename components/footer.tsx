import React from 'react'
import { Flex, Box, Link, Tooltip } from '@chakra-ui/core'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      width="100%"
      mx="auto"
      mt="48"
      bg="gray.500"
      py="50px"
      px="10px"
    >
      <Tooltip
        hasArrow
        aria-label="Github Profile"
        label="Github Profile"
        placement="top"
        bg="white"
        color="black"
      >
        <Link isExternal mr="4" href="https://www.github.com/RafaelGoulartB">
          <Box as={FaGithub} size="38px" color="white" />
        </Link>
      </Tooltip>

      <Tooltip
        hasArrow
        aria-label="Linkedin Profile"
        label="Linkedin Profile"
        placement="top"
        bg="white"
        color="black"
      >
        <Link isExternal href="https://www.linkedin.com/in/rafael-goulartb/">
          <Box as={FaLinkedin} size="38px" color="white" />
        </Link>
      </Tooltip>
    </Flex>
  )
}

export default Footer
