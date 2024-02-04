import {ColorStyleType} from '@/models/types/global/colors';
import {StyleProp, ViewStyle} from 'react-native';

export interface TyfButtonProps {
  text: string;
  color?: ColorStyleType;
  styles?: StyleProp<ViewStyle>;
  onClick?: () => void;
}
