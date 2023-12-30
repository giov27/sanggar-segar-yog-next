import {
  BackgroundContainer,
  CardJoin,
  Desc,
  StyledButton,
  SubTitle,
} from '@/app/page.styled';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimoniesData from '@/lib/testimoniesData.json';
import TestimonyCard from '../TestimonyCard';

const FourthSectionMobile = () => {
  return (
    <>
      <BackgroundContainer $bgcolor="#6673E3">
        <CardJoin>
          <SubTitle $textalign="center">
            Gabung Sekarang Juga!
          </SubTitle>
          <Desc $textalign="center">
            Simpan dan amankan kursi kamu untuk bergabung dalam
            pelatihan intensif seni dari sanggar kami!
          </Desc>
          <div className="text-center">
            <StyledButton $bgcolor="#2A4461" $color="#FFF">
              Hubungi Kami
            </StyledButton>
          </div>
        </CardJoin>
        <SubTitle $textalign="center" $mt="48px">
          Apa Kata Mereka?
        </SubTitle>
        <Desc $textalign="center">
          Lihat kata mereka yang sudah merasakan serunya bergabung
          dengan Sanggar Segar dan meraih keinginan mereka, mulai dari
          kebutuhan pribadi hingga kebutuhan profesional. Kamu adalah
          selanjutnya?!
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
          className="mySwiper pb-3"
        >
          {testimoniesData &&
            testimoniesData.testimonies.map((v: any, i: number) => (
              <SwiperSlide
                className="text-center swiper-testimonies"
                key={i}
              >
                <TestimonyCard {...v} />
                {/* <StyledImage
                  src={v.img}
                  alt={v.altText}
                  width={400}
                  height={250}
                  loading="lazy"
                  $height="140px"
                />
                <h6>{v.description}</h6> */}
              </SwiperSlide>
            ))}
        </Swiper>
      </BackgroundContainer>
    </>
  );
};

export default FourthSectionMobile;
