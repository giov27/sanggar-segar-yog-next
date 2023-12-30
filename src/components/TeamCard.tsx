'use client';

import Image from 'next/image';
import styled from 'styled-components';

interface ITeam {
  img: string;
  alt: string;
  teamName: string;
  teamPosition: string;
  desc: string;
  index: number;
}

const Card = styled.div`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
  min-height: 41vh;
`;

const StyledName = styled.h4`
  color: #172496;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledLoc = styled.h5`
  color: #000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const HorizontalLine = styled.hr`
  margin: 12px;
`;

const StyledDesc = styled.p`
  margin-bottom: 0;
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TeamCard = (props: ITeam) => {
  const { img, alt, teamName, teamPosition, desc, index } = props;
  return (
    <Card>
      <Image
        src={img}
        alt={alt}
        className="rounded-circle mb-1"
        width={85}
        height={85}
        priority={index == 1 && true}
        loading={index > 1 ? 'lazy' : undefined}
      />
      <StyledName className="rounded-circle mb-1">
        {teamName}
      </StyledName>
      <StyledLoc className="rounded-circle mb-1">
        {teamPosition}
      </StyledLoc>
      <HorizontalLine />
      <StyledDesc>{desc}</StyledDesc>
    </Card>
  );
};

export default TeamCard;
