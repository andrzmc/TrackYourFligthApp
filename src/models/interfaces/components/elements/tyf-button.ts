import {TyfTypographyVariantType} from '@/models/types/components/elements/tyf-typography';
import {ColorStyleType} from '@/models/types/global/colors';
import {StyleProp, ViewStyle} from 'react-native';

export interface TyfButtonProps {
  text: string;
  color?: ColorStyleType;
  styles?: StyleProp<ViewStyle>;
  disabled?: boolean;
  fontVariant?: TyfTypographyVariantType;
  onClick?: () => void;
}
