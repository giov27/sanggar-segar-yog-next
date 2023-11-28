import {
  BackgroundContainer,
  SubTitle,
  VideoRatio,
} from '@/app/page.styled';

const FifthSectionMobile = () => {
  return (
    <>
      <BackgroundContainer $bgcolor="#FFF">
        <SubTitle $textalign="center" $mt="48px" $color="#106CA3">
          Media Partner
        </SubTitle>
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
