'use client';
import { BackgroundContainer } from '@/app/page.styled';
import Image from 'next/image';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const HeaderTxt = styled.h2`
  color: #106ca3;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

const LinkTxt = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <>
      <BackgroundContainer
        $bgcolor="#F1F1F1"
        className="d-flex flex-wrap row-gap-3"
      >
        <div className="text-center w-100 mb-4">
          <Link href="/" className="mx-auto">
            <Image
              src="/LOGO_SEGAR.svg"
              alt="Studio Segar Logo"
              className=""
              width={200}
              height={40}
              priority
            />
          </Link>
        </div>
        <Col xs={6}>
          <HeaderTxt>Program Pelatihan Seni</HeaderTxt>
          <LinkTxt>Program Level II & III</LinkTxt>
          <LinkTxt>Program BanPer</LinkTxt>
          <LinkTxt>Program BanPer</LinkTxt>
        </Col>
        <Col xs={6}>
          <HeaderTxt>Layanan Anggota</HeaderTxt>
          <LinkTxt>Membership</LinkTxt>
          <LinkTxt>Sewa Gedung Studio</LinkTxt>
          <LinkTxt>Freelancer</LinkTxt>
        </Col>
        <Col xs={6}>
          <HeaderTxt>Tentang Sanggar Segar</HeaderTxt>
          <LinkTxt>Tentang Kami</LinkTxt>
          <LinkTxt>Instruktur Sanggar</LinkTxt>
          <LinkTxt>Partnership</LinkTxt>
        </Col>
      </BackgroundContainer>
    </>
  );
};

export default Footer;
