import React from 'react'
import { Flex, Box, Link, Divider } from '@chakra-ui/react'
import Logo from './logo'
import { navLinks } from './constants'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => (
  <Link
    href={link}
    mt={{ sm: '6', lg: '0' }}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize={{ sm: 'xl', lg: 'lg' }}
    textTransform="uppercase"
    onClick={onClick}
  >
    {children}
  </Link>
)

const Header: React.FC = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="fixed"
      width="100vw"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      paddingX={{ base: '3em', xl: '15%' }}
      paddingY="1.5em"
      backgroundColor="gray.500"
      color="white"
      zIndex={999}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>
      <Box display={{ sm: 'block', lg: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{
          sm: show ? 'block' : 'none',
          lg: 'flex'
        }}
        width={{ sm: 'full', lg: 'auto' }}
        marginTop={{ sm: '20px', lg: '0' }}
      >
        <Divider />
        {navLinks.map(item => (
          <MenuItems key={item.label} onClick={handleToggle} link={item.link}>
            {item.label}
          </MenuItems>
        ))}
      </Box>
    </Flex>
  )
}

export default Header
