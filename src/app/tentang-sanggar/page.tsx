'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  BackgroundContainer,
  Desc,
  HeroSection,
  StyledImage,
  SubTitle,
} from '../page.styled';
import { TextFact, TextItalic } from './page.styled';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import mediaPartnerData from '@/lib/mediaPartnerData.json';
import facilitiesData from '@/lib/facilitiesIndexData.json';
import teamData from '@/lib/teamAboutData.json';
import TeamCard from '@/components/TeamCard';

export default function TentangSanggar() {
  const API_KEY = process.env.GOOGLE_API_KEY;
  return (
    <>
      <HeroSection>
        <h1>Tentang Sanggar Segar</h1>
      </HeroSection>
      <BackgroundContainer $bgcolor="#FFF">
        <TextFact>
          Studio sanggar yang membantumu menjadi TOP 10% Talenta
          Indonesia dalam dunia Seni
        </TextFact>
        <Desc $color="#000">
          Pelajari keahlian dan rahasia untuk mewujudkan karir dan
          masa depan impianmu.
        </Desc>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Visi
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Mencetak tenaga kerja Profesional dibidang Instruktur /
          Pelatih Senam Aerobik sebagai pemandu kebugaran senam
          dimasyarakat secara legal.
        </Desc>
        <TextItalic>“Mahir dalam Praktiknya dari Awam”</TextItalic>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Misi
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Mengerahkan dan mengembangkan para tenaga pemandu kebugaran
          senam dimasyarakat melalui Kursus Pelatih Senam sesuai
          aturan Standar Kompetensi Lulusan (Etika, Praktek secara
          nyata, dan Ilmu Pengetahuan Keolahragaan).
        </Desc>
        <TextItalic>
          “Berbagi, Berproses, Berkesinambungan”
        </TextItalic>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Fasilitas Studio
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Mulai dari materi hingga studio dan matras. Sanggar Segar
          punya berbagai fasilitas yang lengkap untuk menemani
          aktivitasmu dalam memahami seni.
        </Desc>
        {/* SWIPPER */}
        <Swiper
          slidesPerView={'auto'}
          // centeredSlides={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper"
        >
          {facilitiesData &&
            facilitiesData.facilities.map((v: any, i: number) => (
              <SwiperSlide
                className="text-center swiper-facility"
                key={i}
              >
                <StyledImage
                  src={v.img}
                  alt={v.altText}
                  width={400}
                  height={250}
                  loading="lazy"
                  $height="140px"
                />
                <h6>{v.description}</h6>
              </SwiperSlide>
            ))}
        </Swiper>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Tim LKP Segar
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Mereka yang mengabdikan diri untuk tumbuh dan berkembang
          bersama talenta profesional di Studo Segar.
        </Desc>
        <Swiper
          slidesPerView={2}
          // centeredSlides={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper pb-5"
        >
          {teamData &&
            teamData.team.map((v: any, i: number) => (
              <SwiperSlide className="text-center" key={i}>
                <TeamCard {...v} />
              </SwiperSlide>
            ))}
        </Swiper>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Media Partner
        </SubTitle>
        <Swiper
          slidesPerView={2}
          // centeredSlides={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper pb-4"
        >
          {mediaPartnerData &&
            mediaPartnerData.mediaPartners.map(
              (v: any, i: number) => (
                <SwiperSlide key={i} className="text-center">
                  <Image
                    src={v.img}
                    alt={v.alt}
                    width={100}
                    height={100}
                    loading="lazy"
                    style={{ objectFit: 'none' }}
                  />
                </SwiperSlide>
              )
            )}
        </Swiper>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Lokasi Sanggar Segar
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Ingin tahu dimana lokasi sanggar segar?
        </Desc>
        <div className="google-maps">
          <iframe
            width="560"
            height="315"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={
              'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJKct2Y-NYei4RyNi8sYj-eF8&key=' +
              API_KEY
            }
          ></iframe>
        </div>
      </BackgroundContainer>
    </>
  );
}
