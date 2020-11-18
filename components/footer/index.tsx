import React from 'react'
import { Flex, Box, Link, Tooltip } from '@chakra-ui/react'
import { footerSocialLinks } from './constants'

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
      {footerSocialLinks.map(item => (
        <Box
          key={item.label}
          display="flex"
          alignItems="center"
          _odd={{
            mx: '8'
          }}
        >
          <Tooltip
            hasArrow
            aria-label={item.label}
            label={item.label}
            placement="top"
            bg="white"
            color="black"
          >
            <Link isExternal href={item.link}>
              <Box as={item.icon} boxSize="38px" color="white" />
            </Link>
          </Tooltip>
        </Box>
      ))}
    </Flex>
  )
}

export default Footer
