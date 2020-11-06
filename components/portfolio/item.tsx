import React from 'react'
import {
  Link,
  Text,
  Box,
  Flex,
  Button,
  Heading,
  Tooltip,
  Badge,
  PseudoBox
} from '@chakra-ui/core'
import Image from 'next/image'
import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa'
import { ProjectsInterface } from '../../data/types'

const Item: React.FC<ProjectsInterface> = ({
  name,
  description,
  imgSource,
  skills,
  githubUrl,
  websiteUrl,
  playStoreUrl
}) => {
  return (
    <PseudoBox
      as="article"
      display="flex"
      flexDir="column"
      alignItems="center"
      p="8"
      bg="white"
      borderRadius="lg"
      m="3"
      width="360px"
      flexGrow={[1, 1, 1, 0, 0]}
      boxShadow="0px 0px 20px rgb(231, 231, 231)"
      transition="all 0.6s"
      _hover={{
        transform: 'scale(1.03)'
      }}
    >
      <Link
        isExternal
        href={websiteUrl || playStoreUrl || githubUrl}
        alignSelf="center"
        margin="0"
      >
        <Box borderRadius="md" mb="8">
          <Image src={imgSource} width={340} height={240} alt={name} />
        </Box>
      </Link>

      <Flex flexDir="column" alignItems="flex-start">
        <Flex
          flexDir="column"
          minH={['none', 'none', 'none', '220px', '220px']}
        >
          {/* Name */}
          <Heading as="h2" fontSize="lg" alignSelf="center" textAlign="center">
            {name}
          </Heading>
          {/* Description */}
          <Flex flexDir="column" mt="8" mb="3">
            <FieldLabel>Description</FieldLabel>
            <FieldText>{description}</FieldText>
          </Flex>
        </Flex>

        {/* Badge */}
        {skills && (
          <Flex flexWrap="wrap">
            {skills.map(skill => (
              <PseudoBox key={skill} mr="2" _last={{ mr: '0' }}>
                <Badge bg="gray.200" color="white">
                  {skill}
                </Badge>
              </PseudoBox>
            ))}
          </Flex>
        )}
        {/* Buttons */}
        <Flex flexDir="row" mt="6">
          {playStoreUrl && (
            <Link isExternal href={playStoreUrl} mr="4">
              <Tooltip
                hasArrow
                aria-label="See at Play Store"
                label="See at Play Store"
                placement="top"
                bg="blue.500"
              >
                <Button
                  fontWeight="normal"
                  leftIcon={FaGooglePlay}
                  bg="blue.500"
                  variantColor="black"
                  color="white"
                  _hover={{
                    textDecoration: 'underline'
                  }}
                >
                  Play Store
                </Button>
              </Tooltip>
            </Link>
          )}

          {websiteUrl && (
            <Link isExternal href={websiteUrl} mr="4">
              <Tooltip
                hasArrow
                aria-label="See Website Online"
                label="See Website Online"
                placement="top"
                bg="blue.500"
              >
                <Button
                  fontWeight="normal"
                  leftIcon={FaLink}
                  bg="blue.500"
                  variantColor="black"
                  color="white"
                  _hover={{
                    textDecoration: 'underline'
                  }}
                >
                  Website
                </Button>
              </Tooltip>
            </Link>
          )}

          {githubUrl && (
            <Link isExternal href={githubUrl} mr="4">
              <Tooltip
                hasArrow
                aria-label="Github Repository"
                label="Github Repository"
                placement="top"
                bg="gray.500"
              >
                <Button
                  fontWeight="normal"
                  leftIcon={FaGithub}
                  bg="gray.500"
                  variantColor="black"
                  color="white"
                >
                  Github
                </Button>
              </Tooltip>
            </Link>
          )}
        </Flex>
      </Flex>
    </PseudoBox>
  )
}

const FieldLabel: React.FC = ({ children }) => {
  return (
    <Text fontSize="lg" fontWeight="bold" mr="3">
      {children}:
    </Text>
  )
}
const FieldText: React.FC = ({ children }) => {
  return (
    <Heading as="h3" fontSize="lg" fontWeight="light">
      {children}
    </Heading>
  )
}

export default Item
