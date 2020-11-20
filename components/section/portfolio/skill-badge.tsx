import { Badge, Flex, Box } from '@chakra-ui/react'
import React from 'react'

interface SkillBadge {
  skills: string[]
}

const SkillBadge: React.FC<SkillBadge> = ({ skills }) => {
  if (skills)
    return (
      <Flex flexWrap="wrap">
        {skills.map(skill => (
          <Box key={skill} mr="2" _last={{ mr: '0' }}>
            <Badge bg="gray.200" color="white">
              {skill}
            </Badge>
          </Box>
        ))}
      </Flex>
    )
  else return <></>
}

export default SkillBadge
