import TyfSwitch from '@/elements/tyf-switch/tyf-switch';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeMainScreen: FC = () => {
  return (
    <SafeAreaView>
      <TyfSwitch />
      <TyfTypography text="Flight Number" color="Error" />
    </SafeAreaView>
  );
};

export default HomeMainScreen;
