import {ColorStyleType} from '@/models/types/global/colors';
import {ColorPrimaryStyle, ColorLightStyle} from '@/styles/global/colors';
import {StyleProp, TextStyle} from 'react-native';

export const ButtonContentColorTheme = (
  color: ColorStyleType,
  isDarkMode: boolean
): StyleProp<TextStyle> => {
  switch (color) {
    case 'Primary':
      return {
        color: isDarkMode ? ColorPrimaryStyle : ColorLightStyle,
      };
    case 'Light':
      return {
        color: isDarkMode ? ColorLightStyle : ColorPrimaryStyle,
      };
    case 'Warning':
      return {
        color: ColorPrimaryStyle,
      };
    default:
      return {
        color: ColorLightStyle,
      };
  }
};
