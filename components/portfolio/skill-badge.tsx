import { Badge, Flex, PseudoBox } from '@chakra-ui/core'
import React from 'react'

interface SkillBadge {
  skills: string[]
}

const SkillBadge: React.FC<SkillBadge> = ({ skills }) => {
  if (skills)
    return (
      <Flex flexWrap="wrap">
        {skills.map(skill => (
          <PseudoBox key={skill} mr="2" _last={{ mr: '0' }}>
            <Badge bg="gray.200" color="white">
              {skill}
            </Badge>
          </PseudoBox>
        ))}
      </Flex>
    )
  else return <></>
}

export default SkillBadge
