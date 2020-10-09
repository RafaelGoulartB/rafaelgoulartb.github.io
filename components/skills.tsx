import React from 'react'
import { Flex } from '@chakra-ui/core'
import SectionTitle from './section-title'
import SkillsItem from './skills/SkillsItem'
import skills from '../texts/skills'

const Skills: React.FC = () => {
  return (
    <Flex
      as="section"
      id="skills"
      flexDir="column"
      width={['95%', '90%', '80%', '80%']}
      mx="auto"
      mt="48"
    >
      <SectionTitle>Skills</SectionTitle>
      <Flex flexWrap="wrap">
        {skills.map(skill => (
          <SkillsItem
            key={skill.name}
            name={skill.name}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Skills
