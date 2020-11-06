import React from 'react'
import { Link, Text, Box, Flex, Heading, PseudoBox } from '@chakra-ui/core'
import Image from 'next/image'
import { ProjectsInterface } from '../../data/types'
import ProjectButtons from './project-buttons'
import SkillBadge from './skill-badge'

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
      {/* Image */}
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

      {/* Content */}
      <Flex flexDir="column" alignItems="flex-start">
        <Flex
          flexDir="column"
          minH={['none', 'none', '280px', '280px', '280px']}
        >
          <Heading as="h2" fontSize="lg" alignSelf="center" textAlign="center">
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
