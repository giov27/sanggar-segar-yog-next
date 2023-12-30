import {
  BackgroundContainer,
  StyledImage,
  SubTitle,
  VideoRatio,
} from '@/app/page.styled';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import mediaPartnerData from '@/lib/mediaPartnerData.json';
import Image from 'next/image';

const FifthSectionMobile = () => {
  return (
    <>
      <BackgroundContainer $bgcolor="#FFF">
        <SubTitle $textalign="center" $mt="48px" $color="#106CA3">
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
        <SubTitle $textalign="center" $mt="48px" $color="#106CA3">
          Masih Ragu Untuk Join?
        </SubTitle>
        <div style={{ width: '100%', height: 'auto' }}>
          <VideoRatio aspectRatio="16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ia0oJnEkNEM?controls=0"
              title="Video 1 LKP Segar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoRatio>
        </div>
      </BackgroundContainer>
    </>
  );
};

export default FifthSectionMobile;
