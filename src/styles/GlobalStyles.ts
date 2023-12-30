import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  .swiper {
    width: 100%;
    height: 100%;
    /* padding-bottom: 10px; */
  }

  .swiper-facility {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff0;
    width: 70%;
    flex-direction: column;
  }

  .swiper-facility img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-facility:nth-child(1) {
    margin-left: 35px;
  }

  /* .swiper-slide:nth-child(3n) {
    width: 20%;
  } */
  .swiper-facility h6 {
    margin: 0.25rem auto;
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .swiper-facility ul {
    padding-left: 1.5rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-size: 2rem;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 20px;
  }

  .swiper-instructor-index {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff0;
    flex-direction: column;
  }

  .swiper-testimonies {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    background: #fff0;
    width: 70%;
    padding-bottom: 20px;
  }

  .swiper-instructor {
    padding-bottom: 40px;
  }

  .swiper-testimonies-pb,
  .swiper-partner-pb {
    padding-bottom: 24px;
  }

  .google-maps {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;
const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
