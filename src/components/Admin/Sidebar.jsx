import { Button, VStack } from '@chakra-ui/react';
import React from 'react'
import {  RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser2Fill, RiUser3Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation('');

  return (
    <VStack spacing={'8'} p='16' boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5) "} >
        <LinkButton button="Dashboard" url='dashboard' Icon={RiDashboardFill} active={location.pathname === "/admin/dashboard"} />
        <LinkButton button="Create Course" url='createcourse' Icon={RiAddCircleFill}  active={location.pathname === '/admin/createcourse'} />
        <LinkButton button="Courses" url='courses' Icon={RiEyeFill} active={location.pathname === '/admin/courses'} />
        <LinkButton button="Users" url='users' Icon={RiUser3Fill} active={location.pathname === '/admin/users'} />
    </VStack>
  )
}

export default Sidebar;


function LinkButton({button, url, Icon, active}) {
    return (
        <Link to={`/admin/${url}`}>
         <Button fontSize={'larger'} variant='ghost' colorScheme={active?"purple":""}>
         <Icon style={{margin : '4px'}} />
         {button}
         </Button>                   
        </Link> 
    )
    
}