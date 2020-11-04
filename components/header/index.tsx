import React from 'react'
import { Flex, Box, Link, Divider } from '@chakra-ui/core'
import Logo from './logo'
import { navLinks } from './constants'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => (
  <Link
    href={link}
    mt={[6, 6, 0, 0]}
    mr={'36px'}
    display="block"
    fontWeight="medium"
    fontSize={['xl', 'xl', 'lg', 'lg']}
    textTransform="uppercase"
    _first={{
      mt: [6, 6, 0, 0, 0]
    }}
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
      paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      paddingY="1.5em"
      backgroundColor="gray.500"
      color="white"
      zIndex={999}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>
      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
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
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', 'auto', 'auto']}
      >
        <Divider />
        {navLinks.map(items => (
          <MenuItems key={items.label} onClick={handleToggle} link={items.link}>
            {items.label}
          </MenuItems>
        ))}
      </Box>
    </Flex>
  )
}

export default Header
