import styled from 'styled-components/native';

export const TyfDatePickerMinimalistStyled = styled.View`
  width: auto;
  padding: ${8}px ${2}px;
  display: flex;
  flex-flow: wrap row;
  gap: 4px;
`;

export const TyfDatePickerInputStyled = styled.View`
  width: auto;
  position: relative;
  border: 2px solid;
  border-radius: ${12}px;
  padding: ${16}px ${8}px;
`;

export const TyfDatePickerInputContentStyled = styled.View`
  display: flex;
  align-item: flex-end;
  flex-direction: row;
  justify-content: space-between;
  gap: ${8}px;
  padding: 0 4px;
`;
