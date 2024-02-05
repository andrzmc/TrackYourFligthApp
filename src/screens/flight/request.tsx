import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

const FlightRequestScreen = () => {
  const {params} = useRoute();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <SafeAreaView>
      <TyfTypography text="FlightRequestScreen" />
    </SafeAreaView>
  );
};

export default FlightRequestScreen;
