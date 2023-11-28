import {
  BackgroundContainer,
  Desc,
  StyledButton,
  SubTitle,
} from '@/app/page.styled';

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
        <div className="w-100 text-center">
          <StyledButton $bgcolor="#3AD6AB" $color="#FFF">
            Lihat Semua Kelas
          </StyledButton>
        </div>
      </BackgroundContainer>
    </>
  );
};

export default SecondSectionMobile;
