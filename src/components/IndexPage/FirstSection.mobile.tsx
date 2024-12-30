import {
  BackgroundContainer,
  Desc,
  StyledImage,
  SubTitle,
  Title,
  VideoRatio,
} from '@/app/page.styled';
import ButtonDesc from '../ButtonDesc';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import facilitiesData from '@/lib/facilitiesIndexData.json';
import { Col, Container, Row } from 'react-bootstrap';

const FirstSectionMobile = () => {
  return (
    <>
      <BackgroundContainer $bgcolor="#4C55A8">
        <Container>
          <Row>
            <Col sm={12} xl={7}>
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
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Container>
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
      </BackgroundContainer>
    </>
  );
};

export default FirstSectionMobile;
