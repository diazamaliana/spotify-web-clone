import React, { ReactText }  from 'react';
import { NavLink } from 'react-router-dom'
import {  IconButton,  Flex,  HStack,  Icon, Link,  Text,  FlexProps, } from '@chakra-ui/react'
import { IconType } from 'react-icons';
import {  FiMenu,  FiPower } from 'react-icons/fi'
import Profile from '../profile'
import { FaSpotify } from "react-icons/fa"
import { useAuth } from '../../libraries/useAuth'
import { logout } from '../../redux/store/auth'
import { useDispatch } from "react-redux";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  to: string
}

export  const NavItem = ({ icon, to , children, ...rest }: NavItemProps) => {
    return (
       <Link to={to}  as={NavLink} style={{ textDecoration: 'none' }}>
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
              bg: 'dark.400',
              color: 'white',
            }}
            {...rest}>
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
      </Link>
    );
  };
  
  interface HeaderProps extends FlexProps {
    onOpen: () => void;
  }

export const Header = ({ onOpen, ...rest }:HeaderProps) => {
  const { user } = useAuth()
  const dispatch = useDispatch()


    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={'dark.200'}
        borderBottomWidth="1px"
        borderBottomColor={'dark.600'}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        
        <Text as={FaSpotify}  display={{ base: 'flex', md: 'none' }} fontSize="2xl"></Text>
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontWeight="bold">
          Spotigi
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <Profile userData={user} />
          <IconButton
            onClick={() => dispatch(logout())}
            size="md"
            variant="outline"
            aria-label="open menu"
            icon={<FiPower />}
          />
        </HStack>
      </Flex>
    );
  };
  
