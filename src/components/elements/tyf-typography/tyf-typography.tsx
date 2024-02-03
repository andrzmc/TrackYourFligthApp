import {TyfTypographyProps} from '@/models/interfaces/components/elements/tyf-typography';
import React, {FC, useEffect, useState} from 'react';
import {StyleProp, TextStyle, Text} from 'react-native';
import {useColorScheme} from 'react-native/Libraries/Utilities/Appearance';
import {
  TyfTypographyColorDarkTheme,
  TyfTypographyColorWhiteTheme,
  TyfTypographyVariant,
} from './tyf-typography.utils';

const TyfTypography: FC<TyfTypographyProps> = props => {
  const {text, variant, color, styles} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const [colorStyle, setColorStyle] = useState<StyleProp<TextStyle>>();
  const [variantStyle, setVariantStyle] = useState<StyleProp<TextStyle>>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const init = () => {
    defineTextColorStyle();
    defineTextVariantStyle();
  };

  const defineTextColorStyle = () => {
    setColorStyle(
      isDarkMode
        ? TyfTypographyColorDarkTheme[color || 'Primary']
        : TyfTypographyColorWhiteTheme[color || 'Primary']
    );
  };

  const defineTextVariantStyle = () => {
    setVariantStyle(TyfTypographyVariant[variant || 'Paragraph']);
  };

  return text && colorStyle && variantStyle ? (
    <Text style={[colorStyle, variantStyle, styles]}>{text}</Text>
  ) : null;
};

export default TyfTypography;
