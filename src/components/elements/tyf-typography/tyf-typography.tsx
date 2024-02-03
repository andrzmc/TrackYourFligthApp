import {TyfTypographyProps} from '@/models/interfaces/components/elements/tyf-typography';
import React, {FC, useEffect, useState} from 'react';
import {StyleProp, TextStyle, Text, useColorScheme} from 'react-native';
import {
  TyfTypographyColorDarkTheme,
  TyfTypographyColorLightTheme,
  TyfTypographyFontWeight,
  TyfTypographyVariant,
} from './tyf-typography.utils';

const TyfTypography: FC<TyfTypographyProps> = props => {
  const {text, fontWeight, variant, color, styles} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const [isReady, setIsReady] = useState<boolean>();
  const [colorStyle, setColorStyle] = useState<StyleProp<TextStyle>>();
  const [variantStyle, setVariantStyle] = useState<StyleProp<TextStyle>>();
  const [weightStyle, setWeightStyle] = useState<StyleProp<TextStyle>>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    setIsReady(!!text && !!colorStyle && !!variantStyle && !!weightStyle);
  }, [text, colorStyle, variantStyle, weightStyle]);

  const init = () => {
    defineTextColorStyle();
    defineTextVariantStyle();
    defineTextFontWeightStyle();
  };

  const defineTextFontWeightStyle = () => {
    setWeightStyle(TyfTypographyFontWeight[fontWeight || 'Regular']);
  };

  const defineTextColorStyle = () => {
    setColorStyle(
      isDarkMode
        ? TyfTypographyColorDarkTheme[color || 'Primary']
        : TyfTypographyColorLightTheme[color || 'Primary']
    );
  };

  const defineTextVariantStyle = () => {
    setVariantStyle(TyfTypographyVariant[variant || 'Paragraph']);
  };

  return isReady ? (
    <Text style={[weightStyle, colorStyle, variantStyle, styles]}>{text}</Text>
  ) : null;
};

export default TyfTypography;
