import {ChildrenProps} from '@/models/interfaces/global/children';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';
import React, {FC, useEffect, useState} from 'react';
import {View, useColorScheme} from 'react-native';

const GlobalConfigurationModule: FC<ChildrenProps> = props => {
  const {children} = props;

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

  return <View style={{backgroundColor}}>{children}</View>;
};

export default GlobalConfigurationModule;
