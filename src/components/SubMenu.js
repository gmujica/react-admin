import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
`;

const SidebarLabel = styled.span`
    
`;

const SubMenu = ({ item }) => {
    return (
        <>
            <SidebarLink to={item.path}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </SidebarLink>
        </>
    )
}

export default SubMenu
