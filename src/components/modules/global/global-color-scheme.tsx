import {ChildrenProps} from '@/models/interfaces/global/children';
import {
  ColorPrimaryStyle,
  ColorLightStyle,
  ColorTertiaryStyle,
} from '@/styles/global/colors';
import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

const GlobalColorSchemeModule: FC<ChildrenProps> = props => {
  const {children} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = () => {
    defineColorMode();
  };

  const defineColorMode = () => {
    const schemeTheme = isDarkMode ? ColorPrimaryStyle : ColorLightStyle;
    const schemeContent = !isDarkMode ? ColorPrimaryStyle : ColorLightStyle;
    const border = !isDarkMode ? ColorTertiaryStyle : ColorLightStyle;

    setTheme({
      dark: isDarkMode,
      colors: {
        primary: schemeTheme,
        background: schemeTheme,
        card: schemeTheme,
        text: schemeContent,
        border,
        notification: schemeTheme,
      },
    });
  };

  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
};

export default GlobalColorSchemeModule;
