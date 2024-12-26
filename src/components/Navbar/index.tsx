'use client';

import { NextPage } from 'next';
// import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaMapLocationDot } from 'react-icons/fa6';
import styled from 'styled-components';
import styles from '@/app/page.module.css';
import NavItem from './NavItem';
import NavItemDropdown from './NavItemDropdown';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';

// const StyledNavbar = styled(Navbar)`
//   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
//   background-color: #fff;
// `;

// const NavbarToggle = styled(Navbar.Toggle)`
//   font-size: 1rem;
//   border: 0;
//   &:focus {
//     outline: none;
//     box-shadow: 0px 0px 3px #040b4a;
//   }
// `;

// const NavigationBar: NextPage = () => {
//   return (
//     <StyledNavbar
//       collapseOnSelect
//       expand="md"
//       className=""
//       sticky="top"
//     >
//       <Container>
//         <NavbarToggle aria-controls="responsive-navbar-nav" />
//         <Link href="/">
//           <Image
//             src="/LOGO_SEGAR.svg"
//             alt="Studio Segar Logo"
//             className=""
//             width={100}
//             height={24}
//             priority
//           />
//         </Link>
//         <Navbar.Brand
//           href="https://goo.gl/maps/BACa1tY9bhMYRb9Q8"
//           target="_blank"
//         >
//           <FaMapLocationDot color="#040B4A" />
//         </Navbar.Brand>

//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mt-2">
//             {/* <NavDropdown title="Program Sanggar" id="collapsible-nav-dropdown" className={styles.navFontCenter}>
//               <NavDropdown.Item href="#action/3.1" className={styles.navFontCenter}>
//                 Action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2" className={styles.navFontCenter}>
//                 Another action
//               </NavDropdown.Item>
//             </NavDropdown> */}
//             <Accordion defaultActiveKey="0">
//               <Accordion.Item eventKey="0" className={styles.navAccordionItem}>
//                 <Accordion.Header>Program Sanggar</Accordion.Header>
//                 <Accordion.Body>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//                   minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                   aliquip ex ea commodo consequat. Duis aute irure dolor in
//                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//                   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//                   culpa qui officia deserunt mollit anim id est laborum.
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion>
//             <NavItem title="Instruktur" link="/instruktur" />
//             <NavItem title="Membership" link="/membership" />
//             <NavItem title="Tentang Sanggar" link="/tentang-sanggar" />
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </StyledNavbar>
//   );
// };

// export default NavigationBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuItems from '@/lib/menuItems.json';
import Image from 'next/image';


function NavigationBar() {
  return (
    <Navbar expand="md" className="bg-body-white" color='red'>
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/LOGO_SEGAR.svg"
            alt="Studio Segar Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: 'center' }}>
            {
              MenuItems.menus.map((v: any, i: number) => {
                return !v.sub.length
                  ? <Nav.Link key={i} href={v.url}>{v.title}</Nav.Link>
                  : <NavDropdown key={i} title={v.title} id="basic-nav-dropdown">
                    {
                      v.sub.map((v_sub: any, j: number) => {
                        return (
                          <NavDropdown.Item
                            key={`${i}_${j}_${v_sub.title}`}
                            href={v_sub.url}
                            style={{ textAlign: 'center' }}
                          >
                            {v_sub.title}
                          </NavDropdown.Item>
                        )
                      })
                    }
                  </NavDropdown>
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;