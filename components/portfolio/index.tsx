import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import SectionTitle from '../section-title'
import Item from './item'

import projects from '../../data/en/portfolio'

const Portfolio: React.FC = () => {
  return (
    <Flex as="section" id="portfolio" flexDir="column">
      <Heading
        as="h4"
        textTransform="uppercase"
        fontSize="6xl"
        fontWeight="bold"
        width={['95%', '90%', '80%', '80%']}
        mb="12"
        mx="auto"
      >
        Portfolio
      </Heading>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        mx="auto"
        width={['90%', '90%', '90vw', '90vw', '90vw']}
      >
        {projects.map(project => (
          <Item
            key={project.name}
            name={project.name}
            description={project.description}
            imgSource={project.imgSource}
            skills={project.skills}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
            playStoreUrl={project.playStoreUrl}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Portfolio
