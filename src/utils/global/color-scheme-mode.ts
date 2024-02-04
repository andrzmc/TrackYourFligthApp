import {
  SchemePrimaryColorStyle,
  SchemeSecondaryColorStyle,
  SchemeTertiaryColorStyle,
  SchemeSuccessColorStyle,
  SchemeWarningColorStyle,
  SchemeErrorColorStyle,
  SchemeLightColorStyle,
} from '@/styles/global/colors';

export const SchemeColorLightTheme = {
  Primary: SchemePrimaryColorStyle,
  Secondary: SchemeSecondaryColorStyle,
  Tertiary: SchemeTertiaryColorStyle,
  Success: SchemeSuccessColorStyle,
  Warning: SchemeWarningColorStyle,
  Error: SchemeErrorColorStyle,
  Light: SchemeLightColorStyle,
};

export const SchemeColorDarkTheme = {
  Primary: SchemeLightColorStyle,
  Secondary: SchemeSecondaryColorStyle,
  Tertiary: SchemeTertiaryColorStyle,
  Success: SchemeSuccessColorStyle,
  Warning: SchemeWarningColorStyle,
  Error: SchemeErrorColorStyle,
  Light: SchemePrimaryColorStyle,
};
