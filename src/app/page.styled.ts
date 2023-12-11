'use client';
import Image from 'next/image';
import { Button, Container, Ratio } from 'react-bootstrap';
import { text } from 'stream/consumers';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const RedTitle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.colorName1};
`;

export const StyledButton = styled.button<{
  $bgcolor: string;
  $color: string;
}>`
  border-radius: 8px;
  background-color: ${({ $bgcolor }) => $bgcolor};
  padding: 8px 15px;
  color: ${({ $color }) => $color};
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  border: none;
  border: ${({ $bgcolor }) => `2px solid ${$bgcolor}`};
  &:hover {
    color: ${({ $bgcolor }) => $bgcolor};
    background-color: #fff;
  }
`;

export const BackgroundContainer = styled(Container)<{
  $bgcolor: string;
}>`
  background-color: ${({ $bgcolor }) => $bgcolor};
  padding: 3vh 4vw;
`;

export const VideoRatio = styled(Ratio)`
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-flex;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 28px;
`;

export const Desc = styled.p<{
  $textalign?: string;
  $color?: string;
}>`
  color: ${({ $color }) => ($color ? $color : '#FFF')};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: ${({ $textalign }) =>
    $textalign ? $textalign : 'start'};
`;

export const SubTitle = styled.h2<{
  $textalign?: string;
  $mt?: string;
  $color?: string;
}>`
  color: ${({ $color }) => ($color ? $color : '#FFF')};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: ${({ $textalign }) =>
    $textalign ? $textalign : 'start'};
  margin-top: ${({ $mt }) => ($mt ? $mt : '0')};
`;

export const CaptionIcon = styled.p`
  color: #106ca3;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CardJoin = styled.div`
  border-radius: 8px;
  background: rgba(58, 214, 171, 0.8);
  padding: 12px;
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4c55a8;

  h1 {
    margin: 0;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const StyledImage = styled(Image)<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};
  object-fit: cover;
  border-radius: 8px;
  padding: 4px 0;
`;

export const InstructorCard = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const InstructorDescCard = styled.div`
  padding: 8px;
  min-height: 270px;
`;

export const InstructorName = styled.h3`
  color: #040b4a;
  text-align: start;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6px;
`;

export const InstructorTitle = styled.h6<{ $fontweight: number }>`
  color: #040b4a;
  font-style: normal;
  font-size: 14px;
  font-weight: ${({ $fontweight }) => $fontweight};
  line-height: normal;
  text-align: start;
  margin-bottom: 0;
`;

export const InstructorListCourse = styled.ul`
  display: block;
  list-style-type: '-';
  margin-block-start: 8px;
  margin-block-end: 8px;
  margin-inline-start: 0px;
  margin-inline-end: 10px;
  padding-inline-start: 5px;
  text-align: start;
  font-weight: 500;
  color: #040b4a;
  font-size: 14px;
  li {
    padding-left: 6px;
  }
`;
