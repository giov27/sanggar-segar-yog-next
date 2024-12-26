import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus {
    color: #3ad6ab;
  }
`;

export const SmallTitle = styled.h3<{ $color: string }>`
  color: ${({ $color }) => $color};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
