import React from 'react'
import { Flex } from '@chakra-ui/react'
import SectionTitle from '../../section-title'
import Item from './item'

import projects from '../../../data/en/portfolio'

const Portfolio: React.FC = () => {
  return (
    <Flex as="section" id="portfolio" flexDir="column">
      <SectionTitle>Portfolio</SectionTitle>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        mx="auto"
        width={{ sm: '90%', lg: '90vw', xl: '80%' }}
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
