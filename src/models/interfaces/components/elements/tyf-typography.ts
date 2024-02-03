import {
  TyfTypographyColorType,
  TyfTypographyVariantType,
} from '@/models/types/components/elements/tyf-typography';
import {StyleProp, TextStyle} from 'react-native';

export interface TyfTypographyProps {
  text: string;
  variant?: TyfTypographyVariantType;
  color?: TyfTypographyColorType;
  styles?: StyleProp<TextStyle>;
}
