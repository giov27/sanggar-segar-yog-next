'use client';

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