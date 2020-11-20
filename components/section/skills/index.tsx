import React from 'react'
import { Flex } from '@chakra-ui/react'
import SectionTitle from '../../section-title'
import SkillsItem from './item'
import skills from '../../../data/en/skills'

const Skills: React.FC = () => {
  return (
    <Flex
      as="section"
      id="skills"
      flexDir="column"
      width={{ sm: '95%', md: '90%', lg: '80%' }}
      mx="auto"
      mt="48"
    >
      <SectionTitle>Skills</SectionTitle>
      <Flex flexWrap="wrap">
        {skills.map(skill => (
          <SkillsItem
            key={skill.name}
            name={skill.name}
            expTime={skill.expTime}
            icon={skill.icon}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Skills
