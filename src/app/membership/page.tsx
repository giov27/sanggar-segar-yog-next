'use client';

import Image from 'next/image';
import {
  BackgroundContainer,
  CaptionIcon,
  Desc,
  HeroSection,
  StyledButton,
  SubTitle,
} from '../page.styled';
import { SmallTitle, StyledLink } from './page.styled';
import { FaArrowDownLong } from 'react-icons/fa6';

export default function Membership() {
  return (
    <>
      <HeroSection>
        <h1>Membership Sanggar Segar</h1>
      </HeroSection>
      <BackgroundContainer $bgcolor="#FFF">
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Jadi Member Sanggar{' '}
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Yuk! Daftarkan segera keanggotaanmu di Sanggar Segar hanya
          dengan Rp 50.000,00 dan kamu dapat menikmati promo-promo
          spesialnya sebagai Membership resmi.
        </Desc>
        <div className="w-100 text-center">
          <StyledButton $bgcolor="#4C55A8" $color="#FFF">
            Daftar Member
          </StyledButton>
        </div>
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Keuntungan Jadi Member
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Apa aja sih keuntungan yang bisa dipakai dan dinikmati
          ketika jadi Member Sanggar Segar?
        </Desc>
        <div className="text-center">
          <Image
            src="/membership/Discount.png"
            alt="Discount Icon"
            width={60}
            height={60}
            priority
          />
        </div>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Dapet potongan spesial untuk kelas umum, diskon hingga 60%
        </Desc>
        <div className="text-center mt-2">
          <Image
            src="/membership/Priority.png"
            alt="Priority Icon"
            width={60}
            height={60}
            priority
          />
        </div>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Dapet prioritas kursi ketika proses booking kelas{' '}
        </Desc>
        <div className="text-center mt-2">
          <Image
            src="/membership/Community.png"
            alt="Community Icon"
            width={60}
            height={60}
            priority
          />
        </div>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Tergabung dalam komunitas Sanggar Segar{' '}
        </Desc>
      </BackgroundContainer>
      <BackgroundContainer $bgcolor="#4C55A8">
        <SubTitle $textalign="center" $color="#FFF">
          Pengen Pakai Promo Spesial Membership? Gampang banget, loh!
        </SubTitle>
        <SmallTitle $color="#FFF" className="mt-4">
          Langkah 1
        </SmallTitle>
        <Desc $textalign="center" $color="#FFF" className="mt-2">
          Daftarkan keanggotaanmu di Sanggar Segar
        </Desc>
        {/* ICON ARROW DOWN */}
        <div className="text-center mt-2">
          <FaArrowDownLong color="#FFF" size={30} />
        </div>

        <SmallTitle $color="#FFF" className="mt-3">
          Langkah 2
        </SmallTitle>
        <Desc $textalign="center" $color="#FFF" className="mt-2">
          Pilih Kelas Seni yang akan kamu ambil
        </Desc>
        <div className="text-center mt-2">
          <FaArrowDownLong color="#FFF" size={30} />
        </div>

        <SmallTitle $color="#FFF" className="mt-3">
          Langkah 3
        </SmallTitle>
        <Desc $textalign="center" $color="#FFF" className="mt-2">
          Hubungi CP/Sales melalui Whatsapp, dan lampirkan kartu
          membermu saat proses booking{' '}
        </Desc>
        <div className="text-center mt-2">
          <FaArrowDownLong color="#FFF" size={30} />
        </div>

        <SmallTitle $color="#FFF" className="mt-3">
          Langkah 4
        </SmallTitle>
        <Desc $textalign="center" $color="#FFF" className="mt-2">
          Promo spesial dapat dinikmati dan selesaikan pembayaran
          sesuai dengan potongan yang diberikan oleh CP/Sales
        </Desc>
      </BackgroundContainer>

      <BackgroundContainer $bgcolor="#FFF">
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Studio Sanggar Segar
        </SubTitle>
        <Desc $textalign="center" $color="#000">
          Studio Sanggar Segar juga bisa disewa untuk kegiatan pribadi
          loh, diluar dari jadwal yang digunakan untuk program
          sanggar. Biayanya juga cukup terjangkau, nih, hanya Rp
          100.000/jam.
        </Desc>
        <div className="text-center mt-2">
          <StyledButton $bgcolor="#4C55A8" $color="#FFF">
            Ajukan Sewa
          </StyledButton>
        </div>
        <SmallTitle $color="#040B4A" className="mt-3">
          Lokasi Sanggar Segar
        </SmallTitle>
        <Desc $color="#000" $textalign="center">
          Jl. Karya Utama No. 48, Panggung Sari, Sariharjo, Ngaglik,
          Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581{' '}
        </Desc>
        <div className="text-center mt-2">
          <StyledButton $bgcolor="#3AD6AB" $color="#FFF">
            <StyledLink
              href="https://goo.gl/maps/BACa1tY9bhMYRb9Q8"
              target="_blank"
            >
              Kunjungi Via Maps
            </StyledLink>
          </StyledButton>
        </div>
      </BackgroundContainer>
    </>
  );
}
