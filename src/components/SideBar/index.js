import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SideBarData } from './SideBarData'
import SubMenu from './components/SubMenu'
import { IconContext } from 'react-icons/lib'
import { Nav, NavIcon, SideBarNav, SideBarWrap } from './style'

const SideBar = () => {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SideBarNav sidebar={sidebar}>
                    <SideBarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SideBarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />
                        })}
                    </SideBarWrap>
                </SideBarNav>
            </IconContext.Provider>
        </>
    )
}

export default SideBar
