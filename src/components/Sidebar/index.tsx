import React, { ReactNode } from 'react'
import { FiHome,  FiPlus } from 'react-icons/fi'
import { FaSpotify } from "react-icons/fa"
import { Box,  CloseButton,  Flex, Text, Drawer, DrawerContent,   useDisclosure, BoxProps } from '@chakra-ui/react';
import { NavItem, Header } from '../Header'


export default function SidebarWithHeader ({children} : { children: ReactNode}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={'dark.400'}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <Header onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4" backgroundColor={'dark.300'}>
          {children}
        </Box>
    </Box>

  )
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}


export const SidebarContent = ({ onClose,...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={'dark.200'}
      borderRight="1px"
      borderRightColor={'dark.500'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="14" justifyContent="space-between">
        <Text as={FaSpotify} fontSize="2xl"></Text>
        <Text fontSize="2xl" fontWeight="600">Spotigi</Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
        <NavItem icon={FiHome} to="/home"> Home </NavItem>
        <NavItem icon={FiPlus} to="/create-playlist"> Create Playlist </NavItem>
    </Box>
  );
};