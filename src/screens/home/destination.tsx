import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import HomeCoverLayout from '@/layouts/home/home-cover';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

const HomeDestinationScreen: FC = () => {
  return (
    <SafeAreaView>
      <HomeCoverLayout />
      <TyfTypography text="Destination" />
    </SafeAreaView>
  );
};

export default HomeDestinationScreen;
