import React, {FC, useEffect, useState} from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import TyfTypography from '../tyf-typography/tyf-typography';
import {TyfButtonProps} from '@/models/interfaces/components/elements/tyf-button';
import {TyfButtonStyle} from '@/styles/components/elements/tyf-button';
import {
  SchemeColorDarkTheme,
  SchemeColorLightTheme,
} from '@/utils/global/color-scheme-mode';
import {ButtonContentColorTheme} from './tyf-button.util';

const TyfButton: FC<TyfButtonProps> = props => {
  const {text, color, styles, onClick} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const [isReady, setIsReady] = useState<boolean>();
  const [backgroundStyle, setBackgroundStyle] =
    useState<StyleProp<ViewStyle>>();
  const [colorStyle, setColorStyle] = useState<StyleProp<TextStyle>>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    setIsReady(!!text && !!colorStyle && !!backgroundStyle);
  }, [text, colorStyle, backgroundStyle]);

  const init = () => {
    defineBackgroundStyle();
    defineColorStyle();
  };

  const defineBackgroundStyle = () => {
    const theme = isDarkMode
      ? SchemeColorDarkTheme[color || 'Primary']
      : SchemeColorLightTheme[color || 'Primary'];

    const backgroundColor = (theme as ViewStyle).backgroundColor;

    setBackgroundStyle({backgroundColor});
  };

  const defineColorStyle = () => {
    setColorStyle(ButtonContentColorTheme(color || 'Primary', isDarkMode));
  };

  return isReady ? (
    <TouchableOpacity
      style={[TyfButtonStyle, backgroundStyle, styles]}
      onPress={onClick}>
      <TyfTypography
        text={text}
        fontWeight="Medium"
        variant="Small"
        styles={colorStyle}
      />
    </TouchableOpacity>
  ) : null;
};

export default TyfButton;
