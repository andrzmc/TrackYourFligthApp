import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export const ColorPrimaryStyle = '#000000';
export const ColorSecondaryStyle = '#1872B3';
export const ColorTertiaryStyle = '#D6D6D6';
export const ColorSuccessStyle = '#2E9509';
export const ColorWarningStyle = '#FECB2F';
export const ColorErrorStyle = '#B83332';
export const ColorLightStyle = '#FFFFFF';

export const SchemePrimaryColorStyle: StyleProp<TextStyle | ViewStyle> = {
  color: ColorPrimaryStyle,
  backgroundColor: ColorPrimaryStyle,
};
export const SchemeSecondaryColorStyle: StyleProp<TextStyle | ViewStyle> = {
  color: ColorSecondaryStyle,
  backgroundColor: ColorSecondaryStyle,
};
export const SchemeTertiaryColorStyle: StyleProp<TextStyle | ViewStyle> = {
  color: ColorTertiaryStyle,
  backgroundColor: ColorTertiaryStyle,
};
export const SchemeSuccessColorStyle: StyleProp<TextStyle | ViewStyle> = {
  color: ColorSuccessStyle,
  backgroundColor: ColorSuccessStyle,
};
export const SchemeWarningColorStyle: StyleProp<TextStyle | ViewStyle> = {
  color: ColorWarningStyle,
  backgroundColor: ColorWarningStyle,
};
export const SchemeErrorColorStyle: StyleProp<TextStyle | ViewStyle> = {
  color: ColorErrorStyle,
  backgroundColor: ColorErrorStyle,
};
export const SchemeLightColorStyle: StyleProp<TextStyle | ViewStyle> = {
  color: ColorLightStyle,
  backgroundColor: ColorLightStyle,
};
