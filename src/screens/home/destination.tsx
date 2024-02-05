import HomeCoverLayout from '@/layouts/home/home-cover';
import HomeRequesFlightByOriginDestinationLayout from '@/layouts/home/home-request-by-origin-destination';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

const HomeDestinationScreen: FC = () => {
  return (
    <SafeAreaView>
      <HomeCoverLayout />
      <HomeRequesFlightByOriginDestinationLayout />
    </SafeAreaView>
  );
};

export default HomeDestinationScreen;
