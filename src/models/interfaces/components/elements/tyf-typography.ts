import {
  TyfTypographyAlignmentType,
  TyfTypographyDecorationType,
  TyfTypographyFontWeightType,
  TyfTypographyVariantType,
} from '@/models/types/components/elements/tyf-typography';
import {ColorStyleType} from '@/models/types/global/colors';
import {StyleProp, TextStyle} from 'react-native';

export interface TyfTypographyProps {
  text: string;
  fontWeight?: TyfTypographyFontWeightType;
  variant?: TyfTypographyVariantType;
  color?: ColorStyleType;
  alignment?: TyfTypographyAlignmentType;
  decoration?: TyfTypographyDecorationType;
  styles?: StyleProp<TextStyle>;
}
