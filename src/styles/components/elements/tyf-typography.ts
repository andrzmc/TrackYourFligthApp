import {
  FontGarnettBoldStyle,
  FontGarnettMediumStyle,
  FontGarnettRegularStyle,
  FontGarnettLightStyle,
} from '@/styles/global/fonts';
import {StyleProp, TextStyle} from 'react-native';

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
  lineHeight: 40,
  letterSpacing: 0.25,
};

export const TyfTypographySubheadingStyle: StyleProp<TextStyle> = {
  fontSize: 24,
  lineHeight: 32,
  letterSpacing: 0.25,
};

export const TyfTypographyParagraphStyle: StyleProp<TextStyle> = {
  fontSize: 16,
  lineHeight: 20,
  letterSpacing: 0.25,
};

export const TyfTypographySmallStyle: StyleProp<TextStyle> = {
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 0.25,
};
