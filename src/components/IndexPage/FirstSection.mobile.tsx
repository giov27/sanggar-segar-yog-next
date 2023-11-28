import {
  BackgroundContainer,
  Desc,
  SubTitle,
  Title,
  VideoRatio,
} from '@/app/page.styled';
import ButtonDesc from '../ButtonDesc';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const FirstSectionMobile = () => {
  return (
    <>
      <BackgroundContainer $bgcolor="#4C55A8">
        <div style={{ width: '100%', height: 'auto' }}>
          <VideoRatio aspectRatio="16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BQeZXmRgbCA?controls=0"
              title="Video 1 LKP Segar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoRatio>
        </div>
        <Title>
          Belajar Seni yang Bugar Gabungnya di Sanggar Segar
        </Title>
        <Desc>
          Instruktur pelatihan terbaik dan berpengalaman akan ngajarin
          kamu sampai benar-benar memahami dan mendapat keahlian dari
          program seni yang diikuti untuk pilihan terbaik dari masa
          depan kamu.
        </Desc>
        <ButtonDesc btnText={'Daftar Sekarang'}>
          Daftarkan keanggotaanmu untuk mendapatkan diskon & paket
          spesial
        </ButtonDesc>
        <ButtonDesc btnText={'Lihat Demo'} extendClass={'mt-3'}>
          Simak video pelatihan dari instruktur berpengalaman untuk
          program pilihanmu
        </ButtonDesc>
        <SubTitle $textalign="center" $mt="48px">
          Fasilitas Studio
        </SubTitle>
        <Desc $textalign="center">
          Mulai dari materi hingga studio dan matras. Sanggar Segar
          punya berbagai fasilitas yang lengkap untuk menemani
          aktivitasmu dalam memahami seni.
        </Desc>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </BackgroundContainer>
    </>
  );
};

export default FirstSectionMobile;
