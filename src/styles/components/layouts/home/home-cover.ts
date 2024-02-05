import {ColorTertiaryStyle} from '@/styles/global/colors';
import styled from 'styled-components/native';

export const HomeCoverStyled = styled.View`
  width: 100%;
  height: ${200}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  border: 0 solid ${ColorTertiaryStyle};
  border-bottom-width: 1px;
  z-index: 2;
`;

export const HomeCoverTextStyled = styled.View`
  display: block;
`;

export const HomeCoverToogleStyled = styled.View`
  position: absolute;
  left: 15%;
  right: 15%;
  width: 70%;
  bottom: -${25}px;
`;
