'use client';

import {
  BackgroundContainer,
  HeroSection,
} from '../page.styled';
import classItems from '@/lib/classItemsData.json';
import TitleButton from '@/components/elements/titleButton';
import ClassCardContainer from '@/components/fragments/classSection/ClassCardContainer';

export default function KelasUmumPage() {
  return (
    <>
      <HeroSection>
        <h1>Program Sanggar Segar</h1>
      </HeroSection>
      <BackgroundContainer $bgcolor="#FFF">
        <TitleButton title={'Kelas Umum'} />
        <ClassCardContainer classItems={classItems.classes[0].items} />
      </BackgroundContainer>
    </>
  );
}
