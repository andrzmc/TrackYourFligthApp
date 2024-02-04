import HomeNavigation from '@/navigation/home/navigation';
import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GlobalColorSchemeModule from './global-color-scheme';

const GlobalConfigurationModule: FC = () => {
  return (
    <SafeAreaProvider>
      <GlobalColorSchemeModule>
        <HomeNavigation />
      </GlobalColorSchemeModule>
    </SafeAreaProvider>
  );
};

export default GlobalConfigurationModule;
