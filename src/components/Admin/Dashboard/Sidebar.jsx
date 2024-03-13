import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'

const Sidebar = () => {
    const location = useLocation();
    return (
        <VStack spacing={"8"} padding={"16"} boxShadow={"-2px 0px 20px rgba(107,70,193,0.5)"}>
            <LinkButton url={"dashboard"} Icon={RiDashboardFill } text={"Dashboard"} active={location.pathname==="/admin/dashboard"} />
            <LinkButton url={"createcourse"} Icon={RiAddCircleFill } text={"Create Course"} active={location.pathname==="/admin/createcourse"} />
            <LinkButton url={"courses"} Icon={RiEyeFill } text={"courses"} active={location.pathname==="/admin/courses"} />
            <LinkButton url={"users"} Icon={RiUser3Fill } text={"Users"} active={location.pathname==="/admin/users"} />
        </VStack>
    )
}

export default Sidebar


const LinkButton = ({url,Icon,text,active}) => {

    return (
        <Link to={`/admin/${url}`}>
            <Button fontSize={"large"} variant={"ghost"} colorScheme={active?"purple":''}>
                <Icon style={{ margin: "4px" }} />
                {text}
            </Button>
        </Link>
    )
}