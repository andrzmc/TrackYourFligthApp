import {
  ColorPrimaryStyle,
  ColorSecondaryStyle,
  ColorSuccessStyle,
  ColorWarningStyle,
  ColorErrorStyle,
  ColorLightStyle,
} from '@/styles/global/colors';
import {
  FontGarnettBoldStyle,
  FontGarnettMediumStyle,
  FontGarnettRegularStyle,
  FontGarnettLightStyle,
} from '@/styles/global/fonts';
import {StyleProp, TextStyle} from 'react-native';

export const TyfTypographyPrimaryColorStyle: StyleProp<TextStyle> = {
  color: ColorPrimaryStyle,
};
export const TyfTypographySecondaryColorStyle: StyleProp<TextStyle> = {
  color: ColorSecondaryStyle,
};
export const TyfTypographySuccessColorStyle: StyleProp<TextStyle> = {
  color: ColorSuccessStyle,
};
export const TyfTypographyWarningColorStyle: StyleProp<TextStyle> = {
  color: ColorWarningStyle,
};
export const TyfTypographyErrorColorStyle: StyleProp<TextStyle> = {
  color: ColorErrorStyle,
};
export const TyfTypographyLightColorStyle: StyleProp<TextStyle> = {
  color: ColorLightStyle,
};

export const TyfTypographyFontBoldStyle: StyleProp<TextStyle> = {
  fontFamily: FontGarnettBoldStyle,
};

export const TyfTypographyFontMediumStyle: StyleProp<TextStyle> = {
  fontFamily: FontGarnettMediumStyle,
};

export const TyfTypographyFontRegularStyle: StyleProp<TextStyle> = {
  fontFamily: FontGarnettRegularStyle,
};

export const TyfTypographyFontLightStyle: StyleProp<TextStyle> = {
  fontFamily: FontGarnettLightStyle,
};

export const TyfTypographyHeadingStyle: StyleProp<TextStyle> = {
  fontSize: 32,
  lineHeight: 32,
  letterSpacing: 0.25,
};

export const TyfTypographySubheadingStyle: StyleProp<TextStyle> = {
  fontSize: 24,
  lineHeight: 24,
  letterSpacing: 0.25,
};

export const TyfTypographyParagraphStyle: StyleProp<TextStyle> = {
  fontSize: 16,
  lineHeight: 18,
  letterSpacing: 0.25,
};

export const TyfTypographySmallStyle: StyleProp<TextStyle> = {
  fontSize: 12,
  lineHeight: 20,
  letterSpacing: 0.25,
};
