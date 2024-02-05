import {TyfTypographyProps} from '@/models/interfaces/components/elements/tyf-typography';
import React, {FC, useEffect, useState} from 'react';
import {StyleProp, TextStyle, Text, useColorScheme} from 'react-native';
import {
  TyfTypographyFontWeight,
  TyfTypographyVariant,
} from './tyf-typography.utils';
import {
  SchemeColorDarkTheme,
  SchemeColorLightTheme,
} from '@/utils/global/color-scheme-mode';

const TyfTypography: FC<TyfTypographyProps> = props => {
  const {text, fontWeight, variant, color, alignment, decoration, styles} =
    props;

  const isDarkMode = useColorScheme() === 'dark';

  const [isReady, setIsReady] = useState<boolean>();
  const [colorStyle, setColorStyle] = useState<StyleProp<TextStyle>>();
  const [variantStyle, setVariantStyle] = useState<StyleProp<TextStyle>>();
  const [weightStyle, setWeightStyle] = useState<StyleProp<TextStyle>>();
  const [alignmentStyle, setAlignmentStyle] = useState<StyleProp<TextStyle>>();
  const [decorationStyle, setDecorationStyle] =
    useState<StyleProp<TextStyle>>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    setIsReady(
      !!text &&
        !!colorStyle &&
        !!variantStyle &&
        !!weightStyle &&
        !!alignmentStyle &&
        !!decorationStyle
    );
  }, [
    text,
    colorStyle,
    variantStyle,
    weightStyle,
    alignmentStyle,
    decorationStyle,
  ]);

  const init = () => {
    defineTextColorStyle();
    defineTextVariantStyle();
    defineTextFontWeightStyle();
    defineTextAlignmentStyle();
    defineTextDecorationStyle();
  };

  const defineTextFontWeightStyle = () => {
    setWeightStyle(TyfTypographyFontWeight[fontWeight || 'Regular']);
  };

  const defineTextColorStyle = () => {
    const theme = isDarkMode
      ? SchemeColorDarkTheme[color || 'Primary']
      : SchemeColorLightTheme[color || 'Primary'];

    if (theme) {
      setColorStyle({color: (theme as TextStyle).color});
    }
  };

  const defineTextVariantStyle = () => {
    setVariantStyle(TyfTypographyVariant[variant || 'Paragraph']);
  };

  const defineTextAlignmentStyle = () => {
    setAlignmentStyle({textAlign: alignment || 'left'});
  };

  const defineTextDecorationStyle = () => {
    setDecorationStyle({textDecorationLine: decoration || 'none'});
  };

  return isReady ? (
    <Text
      style={[
        weightStyle,
        colorStyle,
        variantStyle,
        alignmentStyle,
        decorationStyle,
        styles,
      ]}>
      {text}
    </Text>
  ) : null;
};

export default TyfTypography;
