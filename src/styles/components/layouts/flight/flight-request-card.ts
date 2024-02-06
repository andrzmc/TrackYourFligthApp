import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export const FlightRequestCardStyled = styled.View`
  width: 100%;
  padding: ${32}px ${16}px ${4}px ${16}px;
  border: 2px solid;
  border-radius: ${12}px;
  margin-bottom: ${16}px;
  position: relative;
`;

export const FlightRequestCardStatusStyled = styled.View`
  width: auto;
  border-top-left-radius: ${12}px;
  border-bottom-right-radius: ${12}px;
  position: absolute;
`;

export const FlightRequestCardStatusStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 12,
  paddingVertical: 4,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 12,
};

export const FlightRequestCardTimeStyled = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap row;
  gap: ${4}px;
`;
