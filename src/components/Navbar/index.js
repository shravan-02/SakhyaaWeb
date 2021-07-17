import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='home' >
                       Sakhyaa
                   </NavLogo>
                   <MobileIcon onClick={toggle} >
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="about">About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="post">Post</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="how">How It Works</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to="signin">Sign In</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn>
                       {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
                       <NavBtnLink to="/joinnow">JOIN NOW</NavBtnLink>
                   </NavBtn>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar
