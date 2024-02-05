import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

const FlightDetailScreen = () => {
  const {params} = useRoute();

  console.log(params);

  return (
    <SafeAreaView>
      <TyfTypography text="FlightDetailScreen" />
    </SafeAreaView>
  );
};

export default FlightDetailScreen;
