import React from 'react'
import { Flex } from '@chakra-ui/react'
import SectionTitle from '../../section-title'
import ServicesItem from './item'

import services from '../../../data/en/services'

const Services: React.FC = () => {
  return (
    <Flex
      as="section"
      id="services"
      flexDir="column"
      width={{ sm: '95%', md: '90%', lg: '80%' }}
      mx="auto"
      mt="48"
    >
      <SectionTitle>Services</SectionTitle>

      <Flex flexWrap="wrap">
        {services.map(service => (
          <ServicesItem
            key={service.name}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Services
