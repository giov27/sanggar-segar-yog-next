import {
  BackgroundContainer,
  CaptionIcon,
  Desc,
  SubTitle,
} from '@/app/page.styled';
import Image from 'next/image';

const ThirdSectionMobile = () => {
  return (
    <>
      <BackgroundContainer $bgcolor="#FFF">
        <SubTitle $textalign="center" $mt="48px" $color="#106CA3">
          Kenapa Harus Sanggar Segar?
        </SubTitle>
        <Desc $textalign="center" $color="#000">
          Kami sadar bahwa kamu memiliki potensi yang besar dalam
          memahami seni tari baik untuk kebutuhan profesional maupun
          kebutuhan kebugaran.
        </Desc>
        <div className="text-center">
          <Image
            src="/icon/Learning-60px.svg"
            alt="Rocket Icon"
            width={300}
            height={70}
            priority
          />
        </div>
        <CaptionIcon>Dibimbing dari Awam</CaptionIcon>
        <Desc $textalign="center" $color="#000">
          Pemahamanmu masih sedikit? Atau mungkin belum penah sama
          sekali untuk menari? Tenang!!! kamu akan dibimbing oleh
          instruktur terlatih dan profesional yang sudah berpengalaman
          dalam bidangnya hingga mahir dalam praktiknya.
        </Desc>
        <div className="text-center">
          <Image
            src="/icon/Expert-60px.svg"
            alt="Rocket Icon"
            width={300}
            height={70}
            priority
          />
        </div>
        <CaptionIcon>Belajar dari Ahlinya</CaptionIcon>
        <Desc $textalign="center" $color="#000">
          Tenaga ahli instuktur profesional di Sanggar Segar memiliki
          pengalaman lebih dari 10 tahun dalam membimbing talenta agar
          bisa cepat mahir dalam seni yang sesuai dengan pilihanmu.
        </Desc>
        <div className="text-center">
          <Image
            src="/icon/Partner-60px.svg"
            alt="Rocket Icon"
            width={300}
            height={70}
            priority
          />
        </div>
        <CaptionIcon>Jadi Partner Sanggar Segar</CaptionIcon>
        <Desc $textalign="center" $color="#000">
          Lulus dari Sanggar Segar, tapi bingung habis itu mau
          ngapain? Tenang!!! kamu akan dibantu untuk menyalurkan
          bakatmu melalui partnership yang tergabung dalam komunitas
          Sanggar Segar.{' '}
        </Desc>
      </BackgroundContainer>
    </>
  );
};

export default ThirdSectionMobile;
