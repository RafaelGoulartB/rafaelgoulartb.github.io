import React from 'react'
import { Link, Flex, Button, Tooltip } from '@chakra-ui/core'
import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa'

interface ProjectButtonsProps {
  websiteUrl?: string
  playStoreUrl?: string
  githubUrl?: string
}

const ProjectButtons: React.FC<ProjectButtonsProps> = ({
  websiteUrl,
  playStoreUrl,
  githubUrl
}) => {
  return (
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
  )
}

export default ProjectButtons