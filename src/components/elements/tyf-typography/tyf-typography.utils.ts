import {
  TyfTypographyPrimaryColorStyle,
  TyfTypographySuccessColorStyle,
  TyfTypographyWarningColorStyle,
  TyfTypographyErrorColorStyle,
  TyfTypographyHeadingStyle,
  TyfTypographySubheadingStyle,
  TyfTypographyParagraphStyle,
  TyfTypographySmallStyle,
  TyfTypographySecondaryColorStyle,
  TyfTypographyLightColorStyle,
} from '@/styles/components/elements/tyf-typography';

export const TyfTypographyColorWhiteTheme = {
  Primary: TyfTypographyPrimaryColorStyle,
  Secondary: TyfTypographySecondaryColorStyle,
  Success: TyfTypographySuccessColorStyle,
  Warning: TyfTypographyWarningColorStyle,
  Error: TyfTypographyErrorColorStyle,
  Light: TyfTypographyLightColorStyle,
};

export const TyfTypographyColorDarkTheme = {
  Primary: TyfTypographyLightColorStyle,
  Secondary: TyfTypographySecondaryColorStyle,
  Success: TyfTypographySuccessColorStyle,
  Warning: TyfTypographyWarningColorStyle,
  Error: TyfTypographyErrorColorStyle,
  Light: TyfTypographyPrimaryColorStyle,
};

export const TyfTypographyVariant = {
  Heading: TyfTypographyHeadingStyle,
  Subheading: TyfTypographySubheadingStyle,
  Paragraph: TyfTypographyParagraphStyle,
  Small: TyfTypographySmallStyle,
};
