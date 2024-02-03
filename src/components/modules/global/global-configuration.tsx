import {ChildrenProps} from '@/models/interfaces/global/children';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';
import React, {FC} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

const GlobalConfigurationModule: FC<ChildrenProps> = props => {
  const {children} = props;

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        {backgroundColor: isDarkMode ? ColorPrimaryStyle : ColorLightStyle},
      ]}>
      {children}
    </SafeAreaView>
  );
};

export default GlobalConfigurationModule;
