import React from 'react'
import { Link, Text, Flex, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import ProjectButtons from './project-buttons'
import SkillBadge from './skill-badge'
import { ProjectsInterface } from './types'

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
    <Box
      as="article"
      display="flex"
      flexDir="column"
      alignItems="center"
      p="8"
      bg="white"
      borderRadius="lg"
      m="3"
      width={{ base: '320px', xl: '360px' }}
      flexGrow={{ sm: 1, lg: 0 }}
      boxShadow="0px 0px 20px rgb(231, 231, 231)"
      transition="all 0.6s"
      _hover={{
        transform: 'scale(1.03)'
      }}
    >
      {/* Image */}
      <Link
        isExternal
        href={websiteUrl || playStoreUrl || githubUrl}
        alignSelf="center"
        margin="0"
        borderRadius="md"
        mb="8"
      >
        <Image
          src={imgSource}
          width={340}
          height={240}
          alt={name}
          quality={100}
        />
      </Link>

      {/* Content */}
      <Flex flexDir="column" alignItems="flex-start">
        <Flex flexDir="column" minH={{ sm: 'none', lg: '280px' }}>
          <Heading
            as="h2"
            fontSize="lg"
            alignSelf="center"
            textAlign="center"
            lineHeight="1.4rem"
          >
            {name}
          </Heading>
          <Flex flexDir="column" mt="8" mb="3">
            <FieldLabel>Description</FieldLabel>
            <FieldText>{description}</FieldText>
          </Flex>

          <SkillBadge skills={skills} />
        </Flex>

        <ProjectButtons
          websiteUrl={websiteUrl}
          playStoreUrl={playStoreUrl}
          githubUrl={githubUrl}
        />
      </Flex>
    </Box>
  )
}

const FieldLabel: React.FC = ({ children }) => {
  return (
    <Text fontSize="lg" fontWeight="bold" mr="3" mb="2">
      {children}:
    </Text>
  )
}
const FieldText: React.FC = ({ children }) => {
  return (
    <Heading as="h3" fontSize="lg" fontWeight="light" lineHeight="1.4rem">
      {children}
    </Heading>
  )
}

export default Item
