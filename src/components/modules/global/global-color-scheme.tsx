import {ChildrenProps} from '@/models/interfaces/global/children';
import {
  ColorPrimaryStyle,
  ColorLightStyle,
  ColorTertiaryStyle,
} from '@/styles/global/colors';
import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {IconContext, IconProps} from 'phosphor-react-native';

const GlobalColorSchemeModule: FC<ChildrenProps> = props => {
  const {children} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const [isReady, setIsReady] = useState<boolean>();
  const [theme, setTheme] = useState<Theme>();
  const [iconColor, setIconColor] = useState<IconProps>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsReady(!!theme && !!iconColor);
  }, [theme, iconColor]);

  const init = () => {
    defineColorMode();
  };

  const defineColorMode = () => {
    const schemeTheme = isDarkMode ? ColorPrimaryStyle : ColorLightStyle;
    const schemeContent = !isDarkMode ? ColorPrimaryStyle : ColorLightStyle;
    const border = !isDarkMode ? ColorTertiaryStyle : ColorLightStyle;

    defineColorTheme(schemeTheme, schemeContent, border);
    defineColorIcon(schemeContent);
  };

  const defineColorTheme = (
    schemeTheme: string,
    schemeContent: string,
    border: string
  ) => {
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

  const defineColorIcon = (schemeContent: string) => {
    setIconColor({
      color: schemeContent,
      size: 24,
      weight: 'fill',
    });
  };

  return isReady ? (
    <NavigationContainer theme={theme}>
      <IconContext.Provider value={iconColor as IconProps}>
        {children}
      </IconContext.Provider>
    </NavigationContainer>
  ) : null;
};

export default GlobalColorSchemeModule;
