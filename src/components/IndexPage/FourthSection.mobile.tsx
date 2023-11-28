import {
  BackgroundContainer,
  CardJoin,
  Desc,
  StyledButton,
  SubTitle,
} from '@/app/page.styled';

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
      </BackgroundContainer>
    </>
  );
};

export default FourthSectionMobile;
