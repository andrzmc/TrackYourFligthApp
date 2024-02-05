import HomeCoverLayout from '@/layouts/home/home-cover';
import HomeRequesFlightByNumberLayout from '@/layouts/home/home-request-by-flight-number';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeMainScreen: FC = () => {
  return (
    <SafeAreaView>
      <HomeCoverLayout />
      <HomeRequesFlightByNumberLayout />
    </SafeAreaView>
  );
};

export default HomeMainScreen;
