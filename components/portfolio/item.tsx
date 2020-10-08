import React from 'react'
import { Link, Text, Image, Flex, Button } from '@chakra-ui/core'
import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa'
import { ProjectsInterface } from '../../texts/projects'

const Item: React.FC<ProjectsInterface> = ({
  name,
  description,
  imgSource,
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
        <Flex flexDir="column" my="6">
          <FieldLabel>Description</FieldLabel>
          <FieldText>{description}</FieldText>
        </Flex>
        {/* Buttons */}
        <Flex flexDir="row">
          {playStoreUrl && (
            <Link isExternal href={playStoreUrl} mr="4">
              <Button
                fontWeight="normal"
                leftIcon={FaGooglePlay}
                bg="gray.500"
                variantColor="black"
                color="white"
              >
                Play Store
              </Button>
            </Link>
          )}

          {websiteUrl && (
            <Link isExternal href={websiteUrl} mr="4">
              <Button
                fontWeight="normal"
                leftIcon={FaLink}
                bg="gray.500"
                variantColor="black"
                color="white"
              >
                Website
              </Button>
            </Link>
          )}

          {githubUrl && (
            <Link isExternal href={githubUrl} mr="4">
              <Button
                fontWeight="normal"
                leftIcon={FaGithub}
                bg="gray.500"
                variantColor="black"
                color="white"
              >
                Github
              </Button>
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
    <Text fontSize="xl" fontWeight="light">
      {children}
    </Text>
  )
}

export default Item
