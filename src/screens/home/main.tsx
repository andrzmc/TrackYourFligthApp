import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeMainScreen: FC = () => {
  return (
    <SafeAreaView>
      <TyfTypography text="Flight Number" color="Error" />
    </SafeAreaView>
  );
};

export default HomeMainScreen;
