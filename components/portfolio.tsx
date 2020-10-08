import React from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/core'
import SectionTitle from './section-title'
import Item from './portfolio/item'

import projects from '../texts/projects'

const Portfolio: React.FC = () => {
  return (
    <Flex
      as="section"
      id="portfolio"
      flexDir="column"
      width={['95%', '90%', '80%', '80%']}
      mx="auto"
    >
      <SectionTitle>Portfolio</SectionTitle>

      <SimpleGrid columns={[1, 1, 1, 1, 2]} spacing={16}>
        {projects.map(project => (
          <Item
            name={project.name}
            description={project.description}
            imgSource={project.imgSource}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
            playStoreUrl={project.playStoreUrl}
          />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default Portfolio
