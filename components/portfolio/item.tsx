import React from 'react'
import {
  Link,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  Tooltip,
  Badge
} from '@chakra-ui/core'
import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa'
import { ProjectsInterface } from '../../data/projects'

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
    <Flex flexDir={['column', 'column', 'row', 'row', 'row']}>
      <Link
        isExternal
        href={websiteUrl || playStoreUrl || githubUrl}
        mr={['0', '0', '8', '8']}
        alignSelf="center"
      >
        <Image
          src={imgSource}
          alt={name}
          maxW="340px"
          borderRadius="md"
          boxShadow="0px 3px 3px rgba(0, 0, 0, 0.25)"
        />
      </Link>

      <Flex flexDir="column" alignItems="flex-start">
        {/* Name */}
        <Flex flexDir="row" mt={['6', '6', '6', '0', '0']}>
          <FieldLabel>Name</FieldLabel>
          <FieldText>{name}</FieldText>
        </Flex>
        {/* Description */}
        <Flex flexDir="column" mt="6" mb="3">
          <FieldLabel>Description</FieldLabel>
          <FieldText>{description}</FieldText>
        </Flex>

        {/* Badge */}
        {skills && (
          <Flex mb="6">
            {skills.map(skill => (
              <Badge mr="2" bg="gray.200" color="white">
                {skill}
              </Badge>
            ))}
          </Flex>
        )}

        {/* Buttons */}
        <Flex flexDir="row">
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
    </Flex>
  )
}

const FieldLabel: React.FC = ({ children }) => {
  return (
    <Text fontSize="xl" fontWeight="bold" mr="3">
      {children}:
    </Text>
  )
}
const FieldText: React.FC = ({ children }) => {
  return (
    <Heading as="h2" fontSize="xl" fontWeight="light">
      {children}
    </Heading>
  )
}

export default Item
