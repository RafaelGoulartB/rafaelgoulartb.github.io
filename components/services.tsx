import React from 'react'
import { Flex } from '@chakra-ui/core'
import SectionTitle from './section-title'
import ServicesItem from './services/ServicesItem'

import services from '../texts/services'

const Services: React.FC = () => {
  return (
    <Flex
      as="section"
      id="services"
      flexDir="column"
      width={['95%', '90%', '80%', '80%']}
      mx="auto"
      mt="48"
    >
      <SectionTitle>Services</SectionTitle>

      <Flex flexWrap="wrap">
        {services.map(service => (
          <ServicesItem
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
