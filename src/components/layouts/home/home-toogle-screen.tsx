import TyfButton from '@/elements/tyf-button/tyf-button';
import {HomeToogleScreenStyled} from '@/styles/components/layouts/home/home-toggle';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {useColorScheme} from 'react-native';

const HomeToogleScreenLayout: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {navigate} = useNavigation();
  const {name} = useRoute();

  const getButtonStatus = (pathname: string) => {
    return name === pathname ? 'Primary' : 'Light';
  };

  const onToggleRoute = (pathname: string) => {
    navigate(pathname as never);
  };

  return (
    <HomeToogleScreenStyled
      style={{
        backgroundColor: isDarkMode ? ColorPrimaryStyle : ColorLightStyle,
      }}>
      <TyfButton
        text="Flight Number"
        color={getButtonStatus('HomeMainScreen')}
        onClick={() => onToggleRoute('HomeMainScreen')}
        styles={{width: '50%'}}
      />
      <TyfButton
        text="Destination"
        color={getButtonStatus('HomeDestinationScreen')}
        onClick={() => onToggleRoute('HomeDestinationScreen')}
        styles={{width: '50%'}}
      />
    </HomeToogleScreenStyled>
  );
};

export default HomeToogleScreenLayout;
