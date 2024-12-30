'use client';

import {
  BackgroundContainer,
  HeroSection,
} from '../page.styled';
import classItems from '@/lib/classItemsData.json';
import TitleButton from '@/components/elements/titleButton';
import ClassCardContainer from '@/components/fragments/classSection/ClassCardContainer';

export default function KelasIAndIIPage() {
  return (
    <>
      <HeroSection>
        <h1>Program Sanggar Segar</h1>
      </HeroSection>
      <BackgroundContainer $bgcolor="#FFF">
        <TitleButton title={'Program Bantuan Pemerintah (Banper)'} />
        <ClassCardContainer classItems={classItems.classes[2].items} />
      </BackgroundContainer>
    </>
  );
}