import {
  BackgroundContainer,
  Desc,
  InstructorCard,
  InstructorDescCard,
  InstructorListCourse,
  InstructorName,
  InstructorTitle,
  StyledButton,
  StyledImage,
  SubTitle,
} from '@/app/page.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import instructorsData from '@/lib/instructorPageData.json';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import ClassSection from '../fragments/classSection';

const SecondSectionMobile = () => {
  return (
    <>
      <BackgroundContainer $bgcolor="#106ca3">
        <SubTitle $textalign="center" $mt="48px">
          Jelajahi Kelas Senam
        </SubTitle>
        <Desc $textalign="center">
          Berbagai macam pilihan kelas senam maupun seni dengan metode
          pelatihan terbaik yang sesuai dengan keinginanmu
        </Desc>
        <ClassSection/>
        <div className="w-100 text-center">
          <StyledButton $bgcolor="#3AD6AB" $color="#FFF">
            Lihat Semua Kelas
          </StyledButton>
        </div>
        <SubTitle $textalign="center" $mt="48px">
          Instruktur Pelatihan
        </SubTitle>
        <Desc $textalign="center">
          Mereka yang ahli dalam bidangnya dan siap untuk membimbing
          kamu dalam proses belajar seni di Sanggar Segar
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
          className="mySwiper"
        >
          {instructorsData &&
            instructorsData.instructors.map((v: any, i: number) => (
              <SwiperSlide className="text-center " key={i}>
                <InstructorCard>
                  <StyledImage
                    src={v.img}
                    alt={v.altText}
                    width={400}
                    height={250}
                    loading="lazy"
                    $height={'180px'}
                    className="p-0"
                  />
                  <InstructorDescCard>
                    <InstructorName>{v.trainerName}</InstructorName>
                    <InstructorTitle $fontweight={500}>
                      {v.trainerTitle}
                    </InstructorTitle>
                    <InstructorTitle $fontweight={300}>
                      {v.trainerExp}
                    </InstructorTitle>
                    <InstructorListCourse>
                      {v.trainerCourses.map(
                        (value: any, i: number) => (
                          <li key={i}>{value}</li>
                        )
                      )}
                    </InstructorListCourse>
                  </InstructorDescCard>
                </InstructorCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </BackgroundContainer>
    </>
  );
};

export default SecondSectionMobile;
