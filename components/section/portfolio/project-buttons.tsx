import React from 'react'
import { Link, Flex, Button, Tooltip } from '@chakra-ui/react'
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
        <Link
          isExternal
          href={playStoreUrl}
          mr="4"
          _hover={{ textDecor: 'none' }}
        >
          <Tooltip
            hasArrow
            aria-label="See at Play Store"
            label="See at Play Store"
            placement="top"
            bg="blue.500"
          >
            <Button
              fontWeight="normal"
              leftIcon={<FaGooglePlay />}
              bg="blue.500"
              colorScheme="black"
              color="white"
            >
              Play Store
            </Button>
          </Tooltip>
        </Link>
      )}

      {websiteUrl && (
        <Link
          isExternal
          href={websiteUrl}
          mr="4"
          _hover={{ textDecor: 'none' }}
        >
          <Tooltip
            hasArrow
            aria-label="See Website Online"
            label="See Website Online"
            placement="top"
            bg="blue.500"
          >
            <Button
              fontWeight="normal"
              leftIcon={<FaLink />}
              bg="blue.500"
              colorScheme="black"
              color="white"
            >
              Website
            </Button>
          </Tooltip>
        </Link>
      )}

      {githubUrl && (
        <Link isExternal href={githubUrl} mr="4" _hover={{ textDecor: 'none' }}>
          <Tooltip
            hasArrow
            aria-label="Github Repository"
            label="Github Repository"
            placement="top"
            bg="gray.500"
          >
            <Button
              fontWeight="normal"
              leftIcon={<FaGithub />}
              bg="gray.500"
              colorScheme="black"
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
