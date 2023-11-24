'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaMapLocationDot } from 'react-icons/fa6';
import styled from 'styled-components';
import styles from '@/app/page.module.css';
import NavItem from './NavItem';
import NavItemDropdown from './NavItemDropdown';
import Link from 'next/link';

const StyledNavbar = styled(Navbar)`
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const NavbarToggle = styled(Navbar.Toggle)`
  font-size: 1rem;
  border: 0;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px #040b4a;
  }
`;

const NavigationBar: NextPage = () => {
  return (
    <StyledNavbar collapseOnSelect expand="md" className="">
      <Container>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <Link href="/">
          <Image
            src="/LOGO_SEGAR.svg"
            alt="Studio Segar Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </Link>
        <Navbar.Brand
          href="https://goo.gl/maps/BACa1tY9bhMYRb9Q8"
          target="_blank"
        >
          <FaMapLocationDot color="#040B4A" />
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mt-2">
            <NavItemDropdown title="Program Sanggar" />
            <NavItem title="Instruktur" link="/instruktur" />
            <NavItem title="Membership" link="/membership" />
            <NavItem
              title="Tentang Sanggar"
              link="/tentang-sanggar"
            />

            {/* <NavDropdown
              title="Program Sanggar"
              id="collapsible-nav-dropdown"
              className={styles.navFontCenter}
            >
              <NavDropdown.Item href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavigationBar;
{
  /* <nav class="navbar navbar-expand-lg bg-white fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="/" class="text-center pe-3">
        <img src="img/LOGO_SEGAR.png" class="w-50">
      </a>  
      <div class="d-inline d-lg-none">
        <a class="location_icon" href="https://goo.gl/maps/BACa1tY9bhMYRb9Q8" target="_blank"><img src="/img/location-24px.png" class="location-icon"></i></a>
      </div>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ms-md-auto mb-2 mb-lg-0 text-center px-3">
          <li class="nav-item">
            <a class="nav-link" id="beranda"  href="/">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="program"  href="program">Program</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="instruktur"  href="instruktur">Instruktur</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="membership" href="membership">Membership</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="tentang" href="tentang">Tentang Sanggar</a>
          </li>
        </ul>
      </div>
      <div class="d-none d-lg-block">
        <a class="location_icon" href="https://goo.gl/maps/BACa1tY9bhMYRb9Q8" target="_blank"><img src="/img/location-24px.png" class="location-icon"></i></a>
      </div>
    </div>
  </nav> */
}
