import {
  TyfTypographyColorType,
  TyfTypographyFontWeightType,
  TyfTypographyVariantType,
} from '@/models/types/components/elements/tyf-typography';
import {StyleProp, TextStyle} from 'react-native';

export interface TyfTypographyProps {
  text: string;
  fontWeight?: TyfTypographyFontWeightType;
  variant?: TyfTypographyVariantType;
  color?: TyfTypographyColorType;
  styles?: StyleProp<TextStyle>;
}
