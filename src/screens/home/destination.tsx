import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

const HomeDestinationScreen: FC = () => {
  return (
    <SafeAreaView>
      <TyfTypography text="Destination" />
    </SafeAreaView>
  );
};

export default HomeDestinationScreen;
