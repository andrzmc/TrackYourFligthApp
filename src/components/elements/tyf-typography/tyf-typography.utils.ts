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
  TyfTypographyFontBoldStyle,
  TyfTypographyFontLightStyle,
  TyfTypographyFontMediumStyle,
  TyfTypographyFontRegularStyle,
} from '@/styles/components/elements/tyf-typography';

export const TyfTypographyColorLightTheme = {
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

export const TyfTypographyFontWeight = {
  Bold: TyfTypographyFontBoldStyle,
  Medium: TyfTypographyFontMediumStyle,
  Regular: TyfTypographyFontRegularStyle,
  Light: TyfTypographyFontLightStyle,
};
