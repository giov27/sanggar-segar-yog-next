'use client';

import {
  BackgroundContainer,
  Desc,
  HeroSection,
  SubTitle,
} from '../page.styled';
import { TextFact, TextItalic } from './page.styled';

export default function TentangSanggar() {
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
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Tim LKP Segar
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Mereka yang mengabdikan diri untuk tumbuh dan berkembang
          bersama talenta profesional di Studo Segar.
        </Desc>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Media Partner
        </SubTitle>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Lokasi Sanggar Segar
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Ingin tahu dimana lokasi sanggar segar?
        </Desc>
      </BackgroundContainer>
    </>
  );
}
