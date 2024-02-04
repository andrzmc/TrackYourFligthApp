import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import HomeCoverLayout from '@/layouts/home/home-cover';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeMainScreen: FC = () => {
  return (
    <SafeAreaView>
      <HomeCoverLayout />
      <TyfTypography text="Flight Number" color="Error" />
    </SafeAreaView>
  );
};

export default HomeMainScreen;
