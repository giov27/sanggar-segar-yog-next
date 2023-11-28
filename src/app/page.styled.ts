'use client';
import { Button, Container, Ratio } from 'react-bootstrap';
import { text } from 'stream/consumers';
import styled from 'styled-components';

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
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4c55a8;
  margin-bottom: 48px;

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
