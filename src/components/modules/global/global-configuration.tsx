import HomeNavigation from '@/navigation/home/navigation';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const GlobalConfigurationModule: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [backgroundColor, setBackgroundColor] = useState<string>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = () => {
    defineColorMode();
  };

  const defineColorMode = () => {
    setBackgroundColor(isDarkMode ? ColorPrimaryStyle : ColorLightStyle);
  };

  return (
    <SafeAreaProvider style={{backgroundColor}}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default GlobalConfigurationModule;
